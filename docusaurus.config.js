// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Xingshi Blog',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/custom/favicon_xingshi.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://xingshi.blog',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xingshi012', // Usually your GitHub org/user name.
  projectName: 'xingshi012.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // decide whether to enable breadcrumbs navigation
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'Blog | 博客',
          blogTitle: 'Xingshi Blog & Article',
          blogDescription: '星矢的碎碎念 & 文章',
          blogSidebarCount: 'ALL',
          pageBasePath: 'page',
          postsPerPage: 10,

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/custom/avatar-xingshi.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      metadata: [
        {
          name: 'description', 
          content: '一个树洞，倾听、记录自己的碎碎念。 | One place, to record and improve myself.'
        }
      ],
      docs: {
        sidebar: {
          // Show hidden sidebar button
          hideable: true,
          // collapse all sibling categories when expanding one category
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Xingshi Blog',
        logo: {
          alt: 'Xingshi Blog Logo',
          src: 'img/custom/avatar-xingshi.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'dropdown',
            label: 'Blog',
            position: 'left',
            items: [
              {
                label: 'Target',
                to: '/blog',
              },
              {
                label: 'Archive',
                to: '/blog/archive',
              },
              {
                label: 'Category',
                to: '/blog/tags',
              },
            ],
          },
          {
            href: 'https://www.google.com/search?q=site%3Axingshi.blog',
            label: 'Search',
            position: 'right',
          },
          {
            href: 'https://github.com/xingshi012',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learn Documents Overview ',
                to: '/docs/intro',
              },
              {
                label: 'Basic frontend',
                to: '/docs/basic-frontend/',
              },
              {
                label: 'Git',
                to: '/docs/git',
              },
              {
                label: 'React',
                to: '/docs/intro',
              },
              {
                label: 'Vue',
                to: '/docs/intro',
              },
              {
                label: 'Golang',
                to: '/docs/intro',
              },
              {
                label: 'Python',
                to: '/docs/intro',
              },
              {
                label: 'Language',
                to: '/docs/intro',
              },
              {
                label: 'Others',
                to: '/docs/intro',
              }
            ],
          },
          {
            title: 'Life',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
          {
            title: 'For me',
            items: [
              {
                label: 'About me',
                href: '/',
              },
              {
                label: 'mail',
                href: 'mailto:xingshi_012@outlook.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xingshi012',
              },
              {
                label: 'Telegram Channel',
                href: 'https://t.me/xingshi_channel',
              },
              {
                label: 'X',
                href: 'https://x.com/Xingshi_012',
              },
              {
                label: "Youtube",
                href: 'https://www.youtube.com/@Xingshi12',
              }
            ],
          }
        ],
        copyright: `
        <span>Copyright © 2025 - ${new Date().getFullYear()} Xingshi Blog.</span><br>
        <span style="display: flex; align-items: center; justify-content: center;">
          Built with &nbsp; <a href="https://docusaurus.io/" target="_blank" class="footer-docusaurus__link">Docusaurus
          <img src="/img/logo.svg" alt="Docusaurus" title="Docusaurus" style="width: 20px; height: 20px;" />
          </a>.
        </span>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
