# API Public

Public API is an API service that provides various endpoints to access public data. This project is built using Next.js and Cheerio for web scraping.

# API URL

https://api-public-two.vercel.app/

## Technologies Used

Next.js: React framework for production.
Cheerio: Library for parsing and manipulating HTML, used for web scraping.

## Available Endpoints

1. **Gold Price**

Endpoint: /api/price-gold-antam-sell
Description: Returns the current Antam gold price data.

1. **Gold Price (BUYBACK)**

Endpoint: /api/price-gold-antam-buy
Description: Returns the current Antam gold price buyback data.

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
