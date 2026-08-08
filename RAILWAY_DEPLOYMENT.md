# Railway Deployment Guide

## Prerequisites
- Railway account (https://railway.app)
- GitHub account (to push your code)
- Stripe account with test/live keys

## Steps

### 1. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/maryamaltafscompany.git
git branch -M main
git push -u origin main
```

### 2. Connect to Railway
1. Go to https://railway.app/dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Authorize GitHub and select your repository
5. Railway will auto-detect the Node.js app

### 3. Set Environment Variables in Railway
In your Railway project dashboard, go to **Variables** and add:

```
STRIPE_SECRET_KEY=sk_test_... (or sk_live_... for production)
SITE_URL=https://your-railway-domain.railway.app
NODE_ENV=production
```

### 4. Check Build Settings
- **Build Command:** `npm run build` (should be auto-detected)
- **Start Command:** `npm run dev` (should be auto-detected)

### 5. Deploy
Railway will automatically deploy when you push to main. Watch the logs to ensure it builds successfully.

## Testing

### Test Checkout Flow
1. Visit https://your-railway-domain.railway.app/shop
2. Click "Add to bag"
3. You should be redirected to Stripe Checkout
4. Use test card: `4242 4242 4242 4242` with any future expiry and CVC

### Check Stripe Test Payments
1. Go to https://dashboard.stripe.com/test/payments
2. Your test payment should appear there after checkout

## Going Live

When ready to accept real payments:
1. Get your live Stripe keys from https://dashboard.stripe.com/apikeys
2. Update `STRIPE_SECRET_KEY` in Railway to your live key (starts with `sk_live_`)
3. Update `SITE_URL` to your production domain
4. Redeploy (just update the variable, Railway will restart)

## Troubleshooting

**"Checkout is unavailable right now"**
- Check that `STRIPE_SECRET_KEY` is set correctly in Railway Variables
- Make sure it starts with `sk_test_` or `sk_live_`

**Build fails**
- Check the Railway build logs for errors
- Ensure `bun.lock` is committed to git
- Run `npm run build` locally to test

**Port issues**
- Railway automatically assigns a port; it's exposed via your custom domain
- Don't need to manually set PORT in this setup

## Monitoring

In Railway dashboard:
- **Logs** tab: See real-time server logs
- **Metrics** tab: Monitor CPU, memory, network usage
- **Deployments** tab: View deployment history and rollback if needed
