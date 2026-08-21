This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Quote Form Email (Resend)

The quote form posts to `POST /api/quote`, which now sends an email using Resend.

Required server environment variables:

```bash
RESEND_API_KEY=
QUOTE_FROM_EMAIL=
QUOTE_TO_EMAIL=
```

- `RESEND_API_KEY`: API key from your Resend account.
- `QUOTE_FROM_EMAIL`: sender address used by Resend (must be from a verified domain in Resend for production).
- `QUOTE_TO_EMAIL`: inbox that should receive quote requests.

### Local development

1. Copy `.env.local.example` to `.env.local`.
2. Add your Resend values.
3. Run `npm run dev`.
4. Submit the quote form and confirm the message arrives at `QUOTE_TO_EMAIL`.

### Vercel setup (Development, Preview, Production)

1. In Vercel, open your project and go to `Settings -> Environment Variables`.
2. Add `RESEND_API_KEY`, `QUOTE_FROM_EMAIL`, and `QUOTE_TO_EMAIL`.
3. Assign each variable to all three environments:
   - `Development` (for `vercel dev` / local Vercel workflows)
   - `Preview` (for staging branch deployments and other preview deploys)
   - `Production` (for your main deployment)
4. If your staging branch should email a different inbox than other preview branches, add a branch-specific override for `QUOTE_TO_EMAIL`.
5. Redeploy after adding or changing variables.

### Resend account checklist

1. Create an API key with sending permissions.
2. Verify your sending domain in Resend.
3. Use a `QUOTE_FROM_EMAIL` address on that verified domain (for example, `quotes@yourdomain.com`).
4. For quick local testing before domain verification, you can use a Resend test sender if your account allows it, but production should always use a verified domain sender.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
