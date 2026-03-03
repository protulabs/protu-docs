# Protu Documentation

Product documentation for Protu, built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

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

### Vercel

1. Connect the repository to Vercel.
2. Framework preset: **Astro**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy.

### Cloudflare Pages

1. Connect the repository to Cloudflare Pages.
2. Build command: `npm run build`.
3. Build output directory: `dist`.
4. Deploy.

Both platforms auto-deploy on push to `main`.

## Adding new documentation

### File location

Documentation files live in `src/content/docs/`. Each section has its own folder:

```
src/content/docs/
├── getting-started/
├── employees/
├── teams/
│   └── intelligence/
├── security/
├── methodology/
└── support/
```

### Creating a new page

1. Create a markdown file in the appropriate folder:
   ```
   src/content/docs/employees/new-page.md
   ```

2. Add frontmatter at the top:
   ```markdown
   ---
   title: Page title
   description: Brief description for search and metadata.
   ---

   Content goes here.
   ```

3. Add the page to the sidebar (see below).

### File naming

- Use lowercase with hyphens: `employee-profiles.md`
- Folder names match URL paths: `/employees/employee-profiles/`

## Updating navigation

Sidebar groups are defined in `astro.config.mjs` under the `sidebar` array.

### Adding a page to an existing section

Find the section in `astro.config.mjs` and add an item:

```javascript
{
  label: 'Employees',
  collapsed: true,
  items: [
    { label: 'Inviting employees', link: '/employees/inviting-employees/' },
    { label: 'Employee profiles', link: '/employees/employee-profiles/' },
    { label: 'New page', link: '/employees/new-page/' },  // Add here
  ],
},
```

### Creating a new section

Add a new group to the `sidebar` array:

```javascript
{
  label: 'New Section',
  collapsed: true,
  items: [
    { label: 'First page', link: '/new-section/first-page/' },
  ],
},
```

### Nesting (max 2 levels)

Subsections can be nested one level deep:

```javascript
{
  label: 'Teams',
  collapsed: true,
  items: [
    { label: 'Creating teams', link: '/teams/creating-teams/' },
    {
      label: 'Team Intelligence',
      collapsed: true,
      items: [
        { label: 'Team Composition', link: '/teams/intelligence/team-composition/' },
      ],
    },
  ],
},
```

## Adding screenshots

### File location

Images are stored in `public/images/` with subfolders matching documentation sections:

```
public/images/
├── getting-started/
├── employees/
├── teams/
├── security/
├── methodology/
└── support/
```

### Adding an image

1. Save the image in the appropriate folder:
   ```
   public/images/teams/team-composition.png
   ```

2. Reference it in markdown:
   ```markdown
   ![Team Composition view](/images/teams/team-composition.png)
   ```

### Image guidelines

- Use PNG for screenshots.
- Keep file sizes reasonable (compress if needed).
- Use descriptive filenames: `team-composition-gaps.png` not `screenshot1.png`.

## Search

Search is powered by [Pagefind](https://pagefind.app/) and builds automatically during `npm run build`. No additional configuration needed.

## Style guide

- British English spelling (organisation, behaviour, visualisation)
- No em dashes
- Sentence case for headings
- Short, practical sentences
- No marketing language

See the source documentation style guide for full details.
