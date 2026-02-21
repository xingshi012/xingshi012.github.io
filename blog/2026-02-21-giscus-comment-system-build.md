---
slug: giscus-comment-system-build
title: Docusaurus下giscus评论系统构建
date: 2026-02-21
authors: xingshi
tags: [giscus]
---

> 在 Docusaurus 下 使用基于 Github 的 Discussions 构建的 giscus 的评论系统
<!-- truncate -->
在GitHub 中安装 [giscus APP](https://github.com/apps/giscus)，这个 APP 是基于 Github 的 [GitHub Discussions](https://docs.github.com/en/discussions) 构建的

> 相比于传统的使用 GitHub 的 Issue 来做评论，giscus 将评论存储在仓库的 Discussion 中，使得仓库的层次更清晰。\
比如仓库里有 bug 新需求 时可以提 Issue，而有博客网站有评论时存储到仓库的 Discussion 中，把 Issue 和 Discussion 分开 更易于管理和查看，并且 Discussion 也与评论的意思相近，用作评论系统，条理更清晰 使用起来更方便

![giscus-comment-system-build.01.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-02-21/giscus-comment-system-build.01.webp?raw=true)

在项目根目录安装 giscus 的 React 包
> 因为 Docusaurus 是基于 React 构建的， 所以需要安装 React 的 giscus 包

```
yarn add @giscus/react
```
![giscus-comment-system-build.02.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-02-21/giscus-comment-system-build.02.webp?raw=true)

根据 [giscus官网](https://giscus.app/zh-CN) 的步骤，填写仓库地址和 Discussion 分区(giscus 作者推荐用 announcements 分区 为保证后续可维护性)，之后会自动生成 `repo-id` 和 `category-id`，复制出来这段代码

![giscus-comment-system-build.03.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-02-21/giscus-comment-system-build.03.webp?raw=true)

在 `src/components/Comments/index.js` 目录创建一个评论组件
> 因为是 React 项目，所以上面这个代码不一定能用，需要参考 [giscus的另一个仓库](https://github.com/giscus/giscus-component?tab=readme-ov-file#documentation) 格式 去改下格式 就是去掉 `data-` 的属性，以组件的形式去构建 comments system 的元素

![giscus-comment-system-build.04.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-02-21/giscus-comment-system-build.04.webp?raw=true)

在这个目录 `src/theme/BlogPostItem.js` 下 blog post 页面给文章底部加上 comment 评论组件

![giscus-comment-system-build.05.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-02-21/giscus-comment-system-build05.webp?raw=true)

*Reference:*

https://giscus.app/

https://github.com/giscus/giscus

https://github.com/giscus/giscus-component

https://docusaurus.io/docs/swizzling#wrapping

**下面是评论测试：**