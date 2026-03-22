// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import blogRecentPostsPlugin from './src/plugins/blogRecentPostsPlugin.js';
import footerCopyright from './src/config/footerCopyright.js';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Xingshi Blog',
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

  // Verify Algolia
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: 'FF49B727EDA65FC4',
      },
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xingshi012', // Usually your GitHub org/user name.
  projectName: 'xingshi012.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
        htmlLang: 'zh-Hans',
      },
      en: {
        label: 'English',
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
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
  plugins: [blogRecentPostsPlugin],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/custom/avatar-xingshi.jpg',
      colorMode: {
        respectPrefersColorScheme: false,
      },
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
          src: 'img/custom/logo.png',
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
                label: 'More',
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
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/xingshi012/xingshi012.github.io',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Docs ',
                to: '/docs/intro',
              },
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
                label: 'About',
                href: '/about',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xingshi012',
              },
              {
                label: "Youtube",
                href: 'https://www.youtube.com/@Xingshi12',
              },
              {
                label: 'Telegram Channel',
                href: 'https://t.me/xingshi_channel',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Content Usage',
                href: '/content-usage'
              },
              {
                label: 'References',
                href: '/references'
              }
            ],
          },
        ],
        copyright: footerCopyright,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Algolia search Config
      algolia: {
        appId: '6VW10MZ6PN',
        apiKey: 'a1d4ef2190e7586daf871e7d6dcb85a3',
        indexName: 'Xingshi Blog',
        contextualSearch: true, 
        searchPagePath: 'search', 
      },

    }),
};

export default config;
