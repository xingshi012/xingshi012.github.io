---
slug: docusaurus-algolia-search
title: Docusaurus connects to aloglia to implement search function
date: 2026-03-21
authors: xingshi
tags: [algolia]
image: https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search-cover-en.webp
description: "DocSearch is a product of algolia hat uses search functions for free for developer documents or technical blogs. It regularly crawls the content of its own website through crawlers and connects to algolia's own API to implement search functions. Here are some detailed steps to connect to algolia's search functions:)"
---

![docusaurus-algolia-search-cover-en.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search-cover-en.webp)

[DocSearch](https://docsearch.algolia.com/) is a product of [algolia](https://www.algolia.com/) that uses search functions for free for developer documents or technical blogs. It regularly crawls the content of its own website through crawlers and connects to algolia's own API to implement search functions. Here are some detailed steps to connect to algolia's search functions:)

<!-- truncate -->

> This document introduces how to access algolia’s DocSearch for developer documentation or technical blogs.
>
>  Free for all developers, but you must ensure that your website meets [official requirements](https://docsearch.algolia.com/docs/who-can-apply/)
>
> My site current version: 
> - Docusaurus version: 3.9
> - DocSearch v4
>
> Due to timeliness issues, subsequent technical iterations, adjustments to the DocSearch search function and other , the content demonstrated in this document may not be valid.
>
> In addition
>
> **This document is only a basic search function for accessing DocSearch. It does not include Ask AI advanced functions and custom components to optimize the Search component. If needed, you can check the [Docusaurus](https://docusaurus.io/docs/search#ask-ai) and [DocSearch](https://docsearch.algolia.com/docs/v4/askai) official documents to learn more.**
## Application and registration

First, you need to click on the [Aloglia DocSearch application website](https://docsearch.algolia.com/apply) to register an algolia account and fill in some information about your website domain name.

After configuration, you can view your Applications [here](https://dashboard.algolia.com/account/applications) (can be understood as a project, and subsequent information related to your own crawler will be configured in this single Application)

![docusaurus-algolia-search01.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search01.webp)

You can enter a single Application and click on the `DocSearch Setup` in the lower left corner to understand the review progress of your current Application.

> After initializing the Application, you need to go through the following stages before you can access algolia's DocSearch to implement the search function:
>
> - Add Domain
> - Crawl website
> - Implement DocSearch

![docusaurus-algolia-search02.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search02.webp)
## Domain review

After configuring the domain name according to the instructions here, you need to wait for about two working days. Algolia will review whether your website meets the DocSearch requirements.

![docusaurus-algolia-search03.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search03.webp)

After the review is successful, algolia will send an email to your mailbox. Just go and start the configuration.

![docusaurus-algolia-search04.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search04.webp)
## Configuration

### Verify domain ownership

First of all, you will definitely be asked to choose a method and fill in one of the following contents into your website to confirm that this website belongs to you.

![docusaurus-algolia-search05.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search05.webp)

> What I use here is `Meta Tag`. Just add the following content below ` baseUrl: '/'`, in the `docusaurus.config.js` file of the project, which is a more convenient way.
>
> Of course, you can also study and use several other methods (I didn’t study it clearly, so I used the simplest method)

> ![docusaurus-algolia-search06.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search06.webp)

```json
headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: 'FF49B727EDA65FC4',
      },
    },
  ],
```
### Configure crawler

After the previous domain name review is passed, you will come to the second step `Crawl website`

![docusaurus-algolia-search07.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search07.webp)

Then the third step `Implement DocSearch`

![docusaurus-algolia-search08.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search08.webp)

After completion, you may need to verify the domain name again. Repeat the [above operations](#verify-domain-ownership).

![docusaurus-algolia-search09.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search09.webp)
### DocSearch information related to Docusaurus configuration

After the above domain name is repeatedly verified, you can configure DocSearch information locally.

At [this address](https://dashboard.algolia.com/account/api-keys) check your `Application ID` and `Search API Key` configuration in the `docusaurus.config.js` file

Just deploy the website again

![docusaurus-algolia-search10.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search10.webp)
## Effect preview

As shown in the picture, if the input content can be searched, it means success.

![docusaurus-algolia-search11.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search11.webp)
## Problems encountered

- When reviewing the domain, if the first review fails, you can create a new Application and submit your domain again. Review the following. I repeated it twice before I succeeded.
- Be sure to pay attention to `Application ID` and `Search API Key` and don’t configure it incorrectly.
- Because what this website only wants is a basic search function, it has not studied advanced operations such as Ask AI, and there is no relevant space to explain the relevant content. If necessary, you can check the official documents of [Docusaurus](https://docusaurus.io/docs/search#ask-ai) and [DocSearch](https://docsearch.algolia.com/docs/v4/askai) to learn more.
## Reference

https://docusaurus.io/docs/search#using-algolia-docsearch

https://docsearch.algolia.com/docs/what-is-docsearch/

