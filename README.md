# Protu Docs

Product documentation for [Protu](https://protu.io), built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

**Live site:** [docs.protu.io](https://docs.protu.io)

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

## Build

```bash
npm run build
```

Output is generated in the `dist/` folder.

## Deployment

Hosted on [Vercel](https://vercel.com). Auto-deploys on push to `main`.

## Project structure

```
src/content/docs/
├── getting-started/     # Overview, Your first role
├── employees/           # Inviting, Profiles, Assessment & Profile
├── teams/
│   └── intelligence/    # Team Intelligence
├── security/            # Privacy
├── methodology/         # Principles
└── support/             # Contact
```

Sidebar navigation is configured in `astro.config.mjs`.

## Adding a page

1. Create a markdown file in the appropriate folder:
   ```
   src/content/docs/employees/new-page.md
   ```

2. Add frontmatter:
   ```markdown
   ---
   title: Page title
   description: Brief description for search and metadata.
   ---
   ```

3. Add the page to the sidebar in `astro.config.mjs`.

## Screenshots

Screenshots live in `public/images/`. Reference them in markdown:

```markdown
![Team summary](/images/team-summary.png)
```

Use PNG for screenshots. Use descriptive filenames.

### Automated capture

A Playwright script at `protu/e2e/screenshots/capture-docs.spec.ts` captures screenshots from the running app:

```bash
cd ../protu
npx playwright test e2e/screenshots/capture-docs.spec.ts --project=chromium
```

This requires the app running at `protu.test`.

## Style guide

- British English (organisation, behaviour, visualisation)
- No em dashes
- Sentence case for headings
- Short, practical sentences
- No marketing language
