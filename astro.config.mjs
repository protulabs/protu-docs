import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.protu.io',
  integrations: [
    starlight({
      title: 'Protu Docs',
      description: 'Product documentation for Protu',
      components: {
        Header: './src/components/Header.astro',
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
      },
      favicon: '/favicon.svg',
      social: [],
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://docs.protu.io/og-image.png' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:width', content: '2048' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:height', content: '2048' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:card', content: 'summary' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: 'https://docs.protu.io/og-image.png' },
        },
      ],
      tableOfContents: { maxHeadingLevel: 2 },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          collapsed: false,
          items: [
            { label: 'Overview', link: '/getting-started/getting-started/' },
            { label: 'Key concepts', link: '/getting-started/key-concepts/' },
            { label: 'Your first role', link: '/getting-started/your-first-role/' },
          ],
        },
        {
          label: 'Employees',
          collapsed: true,
          items: [
            { label: 'Inviting employees', link: '/employees/inviting-employees/' },
            { label: 'Employee profiles', link: '/employees/employee-profiles/' },
            { label: 'Your profile', link: '/employees/understanding-insights/' },
          ],
        },
        {
          label: 'Teams',
          collapsed: true,
          items: [
            { label: 'Creating teams', link: '/teams/creating-teams/' },
            { label: 'Hiring into teams', link: '/teams/hiring-into-teams/' },
            { label: 'Team Intelligence', link: '/teams/intelligence/team-intelligence/' },
          ],
        },
        {
          label: 'Security',
          collapsed: true,
          items: [
            { label: 'Privacy', link: '/security/privacy/' },
          ],
        },
        {
          label: 'Methodology',
          collapsed: true,
          items: [
            { label: 'Principles', link: '/methodology/principles/' },
          ],
        },
        {
          label: 'Support',
          collapsed: true,
          items: [
            { label: 'Contact', link: '/support/contact/' },
          ],
        },
      ],
    }),
  ],
});
