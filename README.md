# Mademoiselle Annette

Static Cloudflare Worker recreation of the current Mademoiselle Annette website.

## Local development

```sh
npm install
npm run dev
```

The Worker runs at `http://localhost:8787`.

## Deploy to Cloudflare

```sh
npm run deploy
```

The site is configured in `wrangler.jsonc` with static assets served from `public/` and route handling in `src/index.js`.
