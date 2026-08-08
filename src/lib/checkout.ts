import { createServerFn } from "@tanstack/react-start";
import Stripe from "stripe";
import { z } from "zod";
import { EDITIONS, GIFT_WRAP_PRICE_GBP, NOTEBOOK_PRICE_GBP, SHIPPING_REGIONS } from "@/lib/content";

const checkoutInput = z.object({
  edition: z.enum(EDITIONS),
  giftWrap: z.boolean(),
  quantity: z.number().int().min(1).max(9),
  regionIndex: z
    .number()
    .int()
    .min(0)
    .max(SHIPPING_REGIONS.length - 1),
});

function getStripeClient() {
  const secretKey = process.env["STRIPE_SECRET_KEY"];
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not set. Add it to your environment to enable checkout.");
  }
  return new Stripe(secretKey);
}

// Prices are computed here from server-side constants, never from client input.
export const createCheckoutSession = createServerFn({ method: "POST" })
  .validator((data: unknown) => checkoutInput.parse(data))
  .handler(async ({ data }) => {
    const stripe = getStripeClient();
    const region = SHIPPING_REGIONS[data.regionIndex]!;
    const siteUrl = process.env["SITE_URL"] ?? "http://localhost:3000";

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        quantity: data.quantity,
        price_data: {
          currency: "gbp",
          unit_amount: NOTEBOOK_PRICE_GBP * 100,
          product_data: {
            name: `Monarch Notebook — ${data.edition}`,
          },
        },
      },
    ];

    if (data.giftWrap) {
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: GIFT_WRAP_PRICE_GBP * 100,
          product_data: { name: "Gift wrap" },
        },
      });
    }

    if (region.priceGBP > 0) {
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: region.priceGBP * 100,
          product_data: { name: `Shipping — ${region.name}` },
        },
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${siteUrl}/shop?checkout=success`,
      cancel_url: `${siteUrl}/shop?checkout=cancelled`,
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL");
    }

    return { url: session.url };
  });
