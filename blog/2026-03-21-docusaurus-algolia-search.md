---
slug: docusaurus-algolia-search
title: Docusaurus 接入 aloglia 实现搜索功能
date: 2026-03-21
authors: xingshi
tags: [algolia]

---

![docusaurus-algolia-search-cover-cn.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search-cover-cn.webp)

[DocSearch](https://docsearch.algolia.com/) 是 [algolia](https://www.algolia.com/) 旗下一个面向开发者文档或技术博客免费使用搜索功能的一个产品，通过爬虫定期爬取自己网站的内容，接入 algolia 自家的 API 实现搜索功能，以下是一些详细接入 algolia 搜索功能的步骤 :)

<!-- truncate -->

> 此文档介绍的是接入 algolia 面向开发者文档或技术博客的 DocSearch
>
> 对所有开发者都是免费的，但是要保证自己的网站符合 [官方的要求](https://docsearch.algolia.com/docs/who-can-apply/)
>
> 我网站当前的版本：
> - Docusaurus version：3.9
> - DocSearch v4
>
> 由于时效性问题 后续可能会受技术迭代、DocSearch 搜索功能的调整等其他原因，此文档所演示的内容可能会失效
>
> 另外
>
> **此文档只是基础的接入 DocSearch 的搜索功能，不包含 Ask AI 进阶功能和自定义组件对 Search 组件进行优化等，如有需要 可以查看 [Docusaurus](https://docusaurus.io/docs/search#ask-ai) 和 [DocSearch](https://docsearch.algolia.com/docs/v4/askai) 官方文档去了解**
## 申请与注册

首先需要点击 [Aloglia DocSearch 申请网址](https://docsearch.algolia.com/apply) 去注册一个 algolia 账号，以及填写一些有关自己网站域名相关的信息

配置好后 可以在 [这里](https://dashboard.algolia.com/account/applications) 查看自己的 Applications（可以理解为一个项目 后续自己的爬虫相关的信息就会在这单个 Application 中进行配置）

![docusaurus-algolia-search01.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search01.webp)

可以进到单个 Application 中，点击左下角的这个`DocSearch Setup` 去了解你当前这个 Application 审核进度

> 初始化 Application 后，需要经过下面几个阶段 才可以接入 algolia 的 DocSearch 以实现搜索功能：
>
> - Add Domain
> - Crawl website
> - Implement DocSearch

![docusaurus-algolia-search02.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search02.webp)
## 域名审核阶段

在这里按照指引配置了域名后，需要等待大概两个工作日的时间，algolia 会审核你的网站是否符合 DocSearch 要求

![docusaurus-algolia-search03.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search03.webp)

审核成功后 algolia 会发送一个邮件到你的邮箱，去开始配置就可以了

![docusaurus-algolia-search04.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search04.webp)
## 配置阶段

### 验证域名归属

首先肯定会让你任选一种方式，将下面这些内容中的一项 填写到你的网站里，以确认此网站归你所有

![docusaurus-algolia-search05.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search05.webp)

> 这里我用的就是 `Meta Tag` 在项目的 `docusaurus.config.js` 文件的 ` baseUrl: '/',` 下方加上如下内容即可，算是一种比较方便的方式
>
> 当然 也可以研究去使用其他几种方式（我没研究明白 所以用了最简单的一种方式 ）
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
### 配置爬虫

前面的域名审核通过后，会来到第二步骤 `Crawl website`

![docusaurus-algolia-search07.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search07.webp)

然后第三步 `Implement DocSearch`

![docusaurus-algolia-search08.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search08.webp)

完成之后 可能会需要再次验证域名，重复 [上面的操作](#验证域名归属) 即可

![docusaurus-algolia-search09.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search09.webp)
### Docusaurus 配置相关 DocSearch 信息

上面的域名重复验证后，就可以在本地去配置 DocSearch 的信息了

在 [这个地址](https://dashboard.algolia.com/account/api-keys) 查看自己的 `Application ID` 和 `Search API Key` 配置到 `docusaurus.config.js` 文件里 

重新 deploy 网站就可以了

![docusaurus-algolia-search10.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search10.webp)
## 效果预览

如图 输入内容能搜索出来，就是成功了

![docusaurus-algolia-search11.webp](https://raw.githubusercontent.com/xingshi012/blog-images/a1a6b6dd4b9ded1c5fb2354838eadc7bc0f948e2/blogs/2026/2026-03-21/docusaurus-algolia-search11.webp)
## 遇到的问题

- 审核域名时，如果一次审核没通过，可以重新创一个 Application 再次提交下自己的域名 重新审核以下，我就是重复了两次 才成功的
- 一定要看好 `Application ID` 和 `Search API Key` 不要配置错了
- 因为本网站想要的只是一个基础的搜索功能，所以没研究 Ask AI 等进阶操作 也就没有相关篇幅讲解相关内容，如有需要可以查看 [Docusaurus](https://docusaurus.io/docs/search#ask-ai) 和 [DocSearch](https://docsearch.algolia.com/docs/v4/askai) 官方文档去了解
## Reference

https://docusaurus.io/docs/search#using-algolia-docsearch

https://docsearch.algolia.com/docs/what-is-docsearch/

