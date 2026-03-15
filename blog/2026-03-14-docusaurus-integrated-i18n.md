---
slug: docusaurus-integrated-i18n
title: Docusaurus下集成i18n国际化
date: 2026-03-14
authors: xingshi
tags: [i18n]
---

![2026-03-14-docusaurus-integrated-i18n01.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-03-14/2026-03-14-docusaurus-integrated-i18n01.webp?raw=true)

> 此功能由 VScode Copilot 的 Claude 和 GPT 协作完成

i18n 是给网站实现国际化翻译 从而去优化不同地区用户去访问网站体验的一种方式。\
Docusaurus 本身已经内置了 i18n 能力，整体做下来并不复杂，核心就是三件事：

- 在 `docusaurus.config.js` 里声明语言配置
- 生成并维护 `i18n` 目录下的翻译资源
- 对自定义 React 组件和自定义页面做额外适配

这次我把自己的博客从单语言改成了 `zh-Hans` + `en` 两套内容，默认语言是中文 可以下拉语言选择框去选择展示英文，这里记录一下完整过程 :)
<!-- truncate -->

## 更改 docusaurus.config.js 配置文件

对 `i18n` 字段进行如下调整。

```js
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
}
```

导航栏需要加一个 `localeDropdown` 的下拉框，去选择语言：

```js
{
	type: 'localeDropdown',
	position: 'right',
}
```

## 执行命令创建 i18n 目录

在项目里先执行：

```bash
yarn write-translations --locale zh-Hans
yarn write-translations --locale en
```

:::info
这里 `--locale` 参数后面跟的地区代码可以在这个网站去找找的：
https://www.unicode.org/cldr/charts/48/supplemental/language_plural_rules.html
:::

执行后会生成类似这样的目录：

```bash
i18n/
	zh-Hans/
		docusaurus-theme-classic/
		docusaurus-plugin-content-docs/
	en/
		docusaurus-theme-classic/
		docusaurus-plugin-content-docs/
```

这里面主要包含两类内容：

- Docusaurus 主题内置文案的翻译 JSON
- docs、blog、pages 的本地化内容目录

如果只是做最简单的界面国际化，改 JSON 就够了；如果需要将文档、博客、独立页面也完整翻译，那还要继续补充对应的 md/mdx 文件。
> 这里我是给整个网站的中文内容都做了下英文翻译 有点小麻烦😢

## docs、blog、pages 目录下 .md、.mdx类型 markdown 文件的内容翻译

Docusaurus 里，使用 markdown 创建的页面：

- `docs/` 文档目录
- `blog/` 博客目录
- `src/pages/` 独立页面

可以整体复制文件去翻译为对应的语言版本，比如说这里

- docs 的英文内容会放在：

```bash
i18n/en/docusaurus-plugin-content-docs/current/
```

- blogs 的英文内容会放在：

```
i18n/en/docusaurus-plugin-content-blog/
```

- pages 的英文内容会放在：

```bash
i18n/en/docusaurus-plugin-content-pages/
```

这种方式的好处是非常直接：

- 中文内容和英文内容完全分开
- 每篇文档都可以单独维护
- 不需要在一个文件里混写两种语言

不过缺点也很明显，就是内容多了以后维护成本会上升 而且如果是图片资源比较多的情况 可能会影响到网站的加载速度
> 目前自己写的东西不多，免费的 Github 仓库托管应该还够用吧

## 网站自带文本的国际化翻译

Docusaurus 自己内置的很多文字，比如 footer、分页、导航标签、博客列表等，会生成对应的 JSON 翻译文件。

例如：

```bash
i18n/zh-Hans/docusaurus-theme-classic/footer.json
i18n/en/docusaurus-theme-classic/footer.json
```

这一部分适合翻译：

- 导航文案
- footer 文案
- 内置按钮文本
- 博客分页、标签页等默认提示语

不过这里有一个维护点需要注意：

像版权年份这种会随时间变化的内容，**不适合直接写死在 i18n JSON 里**。更好的做法是统一放在 `docusaurus.config.js` 中动态生成，例如：

```js
copyright: `
	<small>Copyright © 2025 - ${new Date().getFullYear()} Xingshi Blog ...</small>
`
```

这样每年自动更新，也不用同时维护多份语言 JSON。

## 自定义 React 组件如何国际化

如果页面里用了自己写的 React 组件，那么它们不会自动跟着 Docusaurus 国际化，需要自己处理。

最常见的做法是使用：

- `<Translate>`：适合 JSX 里直接写的文本
- `translate()`：适合按钮文本、变量里的文案

例如首页 Banner 的写法：

```jsx
import Translate, {translate} from '@docusaurus/Translate';

btnText: translate({id: 'homepage.banner.btnText', message: 'About me'})

heading: (
	<>
		<Translate id="homepage.banner.greeting">你好！我是</Translate>
		<span>
			<Translate id="homepage.banner.xingshi">星矢</Translate>
		</span>
	</>
)
```

这种方式适合首页文案、卡片标题、按钮文本这类“界面型文案”。

## 拓展：React 构建的 page 如何处理多语言链接

这里遇到点问题 总结下吧：

首页某些按钮和卡片链接如果直接写死成 `/about`、`/blog`、`/docs/intro`，那么在英文环境下点击以后，会跳回中文页面。

比如当前页面在 `/en` 下，你希望点击的是 `/en/about`，而不是 `/about`。

这种情况可以在组件里通过 `useDocusaurusContext()` 读取当前语言，然后根据是否为默认语言拼接对应路径：

```jsx
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const {i18n: {currentLocale, defaultLocale}} = useDocusaurusContext();
const localizedUrl = (path) =>
	currentLocale === defaultLocale ? path : `/${currentLocale}${path}`;
```

然后在按钮或卡片里使用：

```jsx
<a href={localizedUrl('/about')}>About</a>
```

这一点非常重要，尤其是首页这种大量自定义组件的地方。header 和 footer 本身是 Docusaurus 管理的，切换语言没有问题

但是自己写的链接如果不处理，就会出现语言上下文断裂，看着看着英文内容 点了下 button，啪 跳中文不迷糊了嘛

## 评论系统也可以跟着语言切换

我站里使用的是 giscus 评论系统，这里也顺手做了语言联动。

实现方式同样很简单：

```jsx
const {i18n: {currentLocale}} = useDocusaurusContext();
const giscusLang = currentLocale === 'zh-Hans' ? 'zh-CN' : 'en';
```

然后传给 giscus：

```jsx
<Giscus lang={giscusLang} />
```

这样中文文章详情页显示中文评论界面，英文文章详情页显示英文评论界面，体验会统一很多。

## 评论区只在文章详情页展示

这个算是之前自己挖的坑吧 -_-

在[之前的文章里](/blog/giscus-comment-system-build)，我使用 giscus 构建了网站的评论系统，当时找的位置不太对，我把 `CommentSystem` 组件 直接挂在 `BlogPostItem` 外层，结果导致：

- 博客详情页会显示评论区
- 博客列表页的文章缩略卡片区域也会渲染评论区

后来虽然可以用 CSS 隐藏掉列表页的评论，但这本质上还是“渲染了再隐藏”，不够优雅

更合适的方式是直接 swizzle `BlogPostPage`，把评论组件放到文章详情页结构里：

```jsx
<BlogPostItem>{children}</BlogPostItem>

{(nextItem || prevItem) && (
	<BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
)}

<CommentSystem />
```

这样结构就会变成：

- 文章正文
- 上一篇 / 下一篇切换按钮
- 评论区

而 blog 列表页、tag 页、author 页都不会再渲染评论组件，逻辑上会更干净

## 本地开发时的几个注意点

默认运行：

```bash
yarn start
```

这时启动的是默认语言，也就是中文站点。

如果你想直接单独调试英文环境，可以使用这个命令：

```bash
yarn start:en
```

这个在调试英文路由时很方便，不然一点语言下拉框就报错，以为是哪里代码的问题呢，其实是因为开发模式下 同时只能开发测试一个语言的页面的缘故

## 国际化翻译的一些建议

如果内容不多，可以直接手动维护；如果内容逐渐变多，AI 的建议是：

- UI 文案用 `Translate` 和 JSON 管理
- docs / blog / pages 这种完整内容按语言拆文件维护
- 公共变量不要写死在翻译 JSON 里，比如年份、链接、站点名
- 自定义组件里的链接一定要考虑 locale 前缀

简单说就是一句话：

**界面型文本交给 i18n JSON，内容型文本交给不同语言目录，自定义逻辑交给 React 组件处理。**

## 总结

这次给 Docusaurus 博客接入 i18n，整体感受是：

- 官方支持已经很完整
- 界面级国际化成本不高
- 真正花时间的是内容翻译和自定义组件适配

如果你只是需要一个中英文博客站点，Docusaurus 这套方案已经足够用了。后面如果还要继续做，我觉得可以继续优化的方向有：

- 自动化翻译辅助流程
- 多语言 SEO 细节
- 评论区、页面元信息、社交卡片的进一步本地化

> 这块是 AI 给的建议，我目前倒是需要琢磨一个流程就是本地写好一篇博客文章，可以自动化的帮我翻译为英文，然后 push 线上 进行 deloy 的

接入了 comment 和给网站做了国际化，这个网站也逐渐像个真正的网站了呢，下一步就是接入 `algolia` 的搜索了呢，现在用 Google `https://www.google.com/search?q=site%3Axingshi.blog` 去限制域名搜索自己的网站，不知道为啥没有内容，应该没有做限制呢，研究研究吧

## Reference
https://docusaurus.io/docs/i18n/tutorial

https://www.unicode.org/cldr/charts/48/supplemental/language_plural_rules.html

https://developer.mozilla.org/en-US/docs/Glossary/Internationalization

https://en.wikipedia.org/wiki/Language_localisation