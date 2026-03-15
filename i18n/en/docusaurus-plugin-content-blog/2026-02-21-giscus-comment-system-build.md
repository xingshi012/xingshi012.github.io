---
slug: giscus-comment-system-build
title: Giscus comment system build in Docusaurus
date: 2026-02-21
authors: xingshi
tags: [giscus]
---

![2026-02-21-giscus-comment-system-build00.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-02-21/2026-02-21-giscus-comment-system-build00.webp?raw=true)

> A comment system for giscus built on Github's Discussions under Docusaurus
<!-- truncate -->
Install [giscus APP](https://github.com/apps/giscus) in GitHub. This APP is built based on Github's [GitHub Discussions](https://docs.github.com/en/discussions)

> Compared with the traditional use of GitHub Issues to make comments, giscus stores comments in the Discussion of the warehouse, making the hierarchy of the warehouse clearer.\
For example, when there are bugs or new requirements in the warehouse, you can raise an Issue, and when there are comments on a blog website, they are stored in Discussion in the warehouse. Separating Issues and Discussions makes it easier to manage and view, and Discussion also has a similar meaning to comments. When used as a comment system, it is clearer and more convenient to use.

![2026-02-21-giscus-comment-system-build01.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-02-21/2026-02-21-giscus-comment-system-build01.webp?raw=true)

Install the giscus React package in the project root directory
> Because Docusaurus is built based on React, you need to install the React giscus package

```
yarn add @giscus/react
```
![2026-02-21-giscus-comment-system-build02.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-02-21/2026-02-21-giscus-comment-system-build02.webp?raw=true)

According to the steps of [giscus official website](https://giscus.app/zh-CN), fill in the warehouse address and Discussion partition (the author of giscus recommends using the announcements partition to ensure subsequent maintainability), and then `repo-id` and `category-id` will be automatically generated. Copy this code

![2026-02-21-giscus-comment-system-build03.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-02-21/2026-02-21-giscus-comment-system-build03.webp?raw=true)

Create a comment component in the `src/components/Comments/index.js` directory
> Because it is a React project, the above code may not be usable. You need to refer to [another warehouse of giscus](https://github.com/giscus/giscus-component?tab=readme-ov-file#documentation) format. To change the format, remove the `data-` attribute and build the elements of the comments system in the form of components.

![2026-02-21-giscus-comment-system-build04.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-02-21/2026-02-21-giscus-comment-system-build04.webp?raw=true)

In this directory `src/theme/BlogPostItem.js`, add a comment component to the bottom of the article on the blog post page.

![2026-02-21-giscus-comment-system-build05.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-02-21/2026-02-21-giscus-comment-system-build05.webp?raw=true)

*Reference:*

https://giscus.app/

https://github.com/giscus/giscus

https://github.com/giscus/giscus-component

https://docusaurus.io/docs/swizzling#wrapping

**Here is the comment test:**