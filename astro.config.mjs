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
        PageTitle: './src/components/PageTitle.astro',
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
      },
      favicon: '/favicon.svg',
      social: [],
      head: [
        {
          tag: 'script',
          attrs: {},
          content: `try{sessionStorage.removeItem('sl-sidebar-state')}catch{}`,
        },
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
        // Vercel Web Analytics + Speed Insights (cookieless). Same-origin
        // scripts served by Vercel once each feature is enabled on the project.
        {
          tag: 'script',
          attrs: {},
          content: `window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};var s=document.createElement('script');s.defer=true;s.src='/_vercel/insights/script.js';document.head.appendChild(s);`,
        },
        {
          tag: 'script',
          attrs: {},
          content: `window.si=window.si||function(){(window.siq=window.siq||[]).push(arguments)};var s=document.createElement('script');s.defer=true;s.src='/_vercel/speed-insights/script.js';document.head.appendChild(s);`,
        },
      ],
      tableOfContents: { maxHeadingLevel: 2 },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          collapsed: true,
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
