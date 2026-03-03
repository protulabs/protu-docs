import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Protu Documentation',
      description: 'Product documentation for Protu',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/protulabs/protu-docs' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          collapsed: false,
          items: [
            { label: 'Getting started', link: '/getting-started/getting-started/' },
            { label: 'Key concepts', link: '/getting-started/key-concepts/' },
            { label: 'Your first role', link: '/getting-started/your-first-role/' },
            { label: 'Your first team', link: '/getting-started/your-first-team/' },
          ],
        },
        {
          label: 'Employees',
          collapsed: true,
          items: [
            { label: 'Inviting employees', link: '/employees/inviting-employees/' },
            { label: 'Employee profiles', link: '/employees/employee-profiles/' },
            { label: 'Understanding insights', link: '/employees/understanding-insights/' },
          ],
        },
        {
          label: 'Teams',
          collapsed: true,
          items: [
            { label: 'Creating teams', link: '/teams/creating-teams/' },
            { label: 'Hiring into teams', link: '/teams/hiring-into-teams/' },
            {
              label: 'Team Intelligence',
              collapsed: true,
              items: [
                { label: 'Team Composition', link: '/teams/intelligence/team-composition/' },
                { label: 'Team Dynamics', link: '/teams/intelligence/team-dynamics/' },
                { label: 'Scenario views', link: '/teams/intelligence/scenario-views/' },
              ],
            },
          ],
        },
        {
          label: 'Security',
          collapsed: true,
          items: [
            { label: 'Privacy', link: '/security/privacy/' },
            { label: 'Passwordless access', link: '/security/passwordless-access/' },
            { label: 'Data security', link: '/security/data-security/' },
          ],
        },
        {
          label: 'Methodology',
          collapsed: true,
          items: [
            { label: 'Principles', link: '/methodology/principles/' },
            { label: 'Scoring', link: '/methodology/scoring/' },
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
