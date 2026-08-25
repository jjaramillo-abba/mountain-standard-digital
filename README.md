# Mountain Standard Digital

Production-ready Next.js marketing site for Mountain Standard Digital.

## Local development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run start
```

The contact form uses Netlify Forms (`msd-contact`) and is ready to collect submissions after deployment. Set the production domain in `src/app/layout.tsx` if it changes from `mountainstandard.digital`.

Netlify is configured through `netlify.toml`. No external assets or personal contact details are embedded. Replace the temporary wordmark and demo work with approved assets when available.

## Git workflow

Initial work is developed on `feature/initial-site`, reviewed through a pull request, then promoted to `main`. Netlify is connected to the GitHub repository; do not connect a custom domain until the owner approves cutover.
