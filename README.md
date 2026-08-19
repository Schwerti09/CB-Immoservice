# CB-Immoservice

## Netlify Deployment

This repository must be deployed from the repository root (the same directory as `package.json` and `netlify.toml`).

- **Production branch:** use the branch that contains these root files.
- **Base directory:** leave empty
- **Build command:** `npm run build`
- **Node.js version:** `20`

`netlify.toml` already configures Node 20 and enables the official Next.js Netlify plugin.