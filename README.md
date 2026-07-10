## Deployment

This repository uses the Next.js Pages Router and deploys to Cloudflare Workers through OpenNext.

Use the Cloudflare-prefixed scripts as the canonical workflow:

```bash
npm run cf:build
npm run cf:preview
npm run cf:deploy
```

The plain `build` script is still available for a standard Next build, but it is not the deployment path for Cloudflare.

Do not use the Cloudflare Pages Next preset or `@cloudflare/next-on-pages` for this repo. That deployment path is not the right fit for this Next.js 16 Pages Router setup.

## Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
