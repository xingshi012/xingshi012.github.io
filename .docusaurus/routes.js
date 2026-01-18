import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '823'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f6e'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '252'),
            routes: [
              {
                path: '/docs/basic-frontend',
                component: ComponentCreator('/docs/basic-frontend', '9d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/basic-frontend/css',
                component: ComponentCreator('/docs/basic-frontend/css', '314'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/basic-frontend/html',
                component: ComponentCreator('/docs/basic-frontend/html', '054'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/basic-frontend/javascript',
                component: ComponentCreator('/docs/basic-frontend/javascript', '752'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/others',
                component: ComponentCreator('/docs/others', '0c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/others/docusaurus-default-doc',
                component: ComponentCreator('/docs/others/docusaurus-default-doc', '8df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/others/docusaurus-default-doc/congratulations',
                component: ComponentCreator('/docs/others/docusaurus-default-doc/congratulations', '760'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/others/docusaurus-default-doc/create-a-blog-post',
                component: ComponentCreator('/docs/others/docusaurus-default-doc/create-a-blog-post', 'aff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/others/docusaurus-default-doc/create-a-document',
                component: ComponentCreator('/docs/others/docusaurus-default-doc/create-a-document', 'f85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/others/docusaurus-default-doc/create-a-page',
                component: ComponentCreator('/docs/others/docusaurus-default-doc/create-a-page', 'a9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/others/docusaurus-default-doc/deploy-your-site',
                component: ComponentCreator('/docs/others/docusaurus-default-doc/deploy-your-site', 'dab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/others/docusaurus-default-doc/manage-docs-versions',
                component: ComponentCreator('/docs/others/docusaurus-default-doc/manage-docs-versions', 'dae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/others/docusaurus-default-doc/markdown-features',
                component: ComponentCreator('/docs/others/docusaurus-default-doc/markdown-features', 'b4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/others/docusaurus-default-doc/translate-your-site',
                component: ComponentCreator('/docs/others/docusaurus-default-doc/translate-your-site', '576'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
