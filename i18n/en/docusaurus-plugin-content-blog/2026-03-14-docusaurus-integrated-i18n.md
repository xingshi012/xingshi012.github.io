---
slug: docusaurus-integrated-i18n
title: Integrating i18n in Docusaurus
date: 2026-03-14
authors: xingshi
tags: [i18n]
---

![2026-03-14-docusaurus-integrated-i18n01.webp](https://github.com/xingshi012/blog-images/blob/main/blogs/2026/2026-03-14/2026-03-14-docusaurus-integrated-i18n01.webp?raw=true)

> This feature was completed through collaboration between Claude and GPT in VSCode Copilot.

i18n is a way to internationalize a website so users in different regions can get a better browsing experience.\
Docusaurus already has built-in i18n support, and the overall process is not complicated. There are three core tasks:

- Declare locale settings in `docusaurus.config.js`
- Generate and maintain translation resources under the `i18n` directory
- Add extra adaptation for custom React components and custom pages

This time, I migrated my blog from a single-language setup to a dual-language setup: `zh-Hans` + `en`. The default language is Chinese, and you can switch to English via the language dropdown. Here is the full process :)
<!-- truncate -->

## Update docusaurus.config.js

Update the `i18n` field like this:

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

You also need to add a `localeDropdown` item in the navbar for language switching:

```js
{
	type: 'localeDropdown',
	position: 'right',
}
```

## Run commands to create the i18n directories

Run these commands in your project first:

```bash
yarn write-translations --locale zh-Hans
yarn write-translations --locale en
```

:::info
The locale code used after `--locale` can be found on this site:
https://www.unicode.org/cldr/charts/48/supplemental/language_plural_rules.html
:::

After running them, directories like this will be generated:

```bash
i18n/
	zh-Hans/
		docusaurus-theme-classic/
		docusaurus-plugin-content-docs/
	en/
		docusaurus-theme-classic/
		docusaurus-plugin-content-docs/
```

These mainly include two categories:

- Translation JSON files for built-in Docusaurus theme text
- Localized content directories for docs, blog, and pages

If you only need basic UI internationalization, editing JSON is enough. But if you want full translation for docs, blog posts, and standalone pages, you also need to create translated md/mdx files.
> I translated all Chinese content on my site into English, and that was a bit tedious 😢

## Translate markdown files in docs, blog, and pages

In Docusaurus, pages created with markdown are in:

- `docs/` for documentation
- `blog/` for blog posts
- `src/pages/` for standalone pages

You can copy files and translate them into corresponding language versions. For example:

- English docs content goes to:

```bash
i18n/en/docusaurus-plugin-content-docs/current/
```

- English blog content goes to:

```
i18n/en/docusaurus-plugin-content-blog/
```

- English pages content goes to:

```bash
i18n/en/docusaurus-plugin-content-pages/
```

This approach has very direct benefits:

- Chinese and English content are fully separated
- Each document can be maintained independently
- No need to mix two languages in a single file

But the downside is also obvious: as content grows, maintenance cost increases. If you have a lot of image assets, page loading speed may also be affected.
> I do not have that much content yet, so free GitHub hosting should still be enough for now.

## Translate built-in website text

Docusaurus generates JSON translation files for many built-in texts, such as the footer, pagination, nav labels, and blog list text.

For example:

```bash
i18n/zh-Hans/docusaurus-theme-classic/footer.json
i18n/en/docusaurus-theme-classic/footer.json
```

This part is suitable for translating:

- Navigation text
- Footer text
- Built-in button text
- Default prompts like blog pagination and tag pages

There is one maintenance detail to watch out for:

Content that changes over time, like copyright year, **should not be hardcoded in i18n JSON**. A better way is to generate it dynamically in `docusaurus.config.js`, for example:

```js
copyright: `
	<small>Copyright © 2025 - ${new Date().getFullYear()} Xingshi Blog ...</small>
`
```

This way it updates automatically every year, and you do not have to maintain multiple JSON files for it.

## How to internationalize custom React components

If your pages use custom React components, they will not be internationalized automatically by Docusaurus, so you need to handle them yourself.

The most common approach is to use:

- `<Translate>`: good for inline JSX text
- `translate()`: good for button text and string variables

For example, in a homepage banner:

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

This pattern works well for UI-oriented text such as homepage copy, card titles, and button labels.

## Extra: handling multilingual links in React-built pages

I ran into an issue here, so here is a quick summary:

If homepage button/card links are hardcoded as `/about`, `/blog`, or `/docs/intro`, clicking them in the English locale can jump back to Chinese pages.

For example, when you are under `/en`, you want `/en/about` instead of `/about`.

In this case, you can read the current locale via `useDocusaurusContext()` and build paths based on whether it is the default locale:

```jsx
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const {i18n: {currentLocale, defaultLocale}} = useDocusaurusContext();
const localizedUrl = (path) =>
	currentLocale === defaultLocale ? path : `/${currentLocale}${path}`;
```

Then use it in buttons or cards:

```jsx
<a href={localizedUrl('/about')}>About</a>
```

This is very important, especially on a homepage with many custom components. Header and footer are managed by Docusaurus and usually switch language correctly.

But if custom links are not handled, locale context breaks. You may read English content, click one button, and suddenly land on Chinese content.

## Make the comment system switch language too

My site uses the giscus comment system, and I also linked its language to the current locale.

Implementation is simple:

```jsx
const {i18n: {currentLocale}} = useDocusaurusContext();
const giscusLang = currentLocale === 'zh-Hans' ? 'zh-CN' : 'en';
```

Then pass it to giscus:

```jsx
<Giscus lang={giscusLang} />
```

This way, Chinese posts show a Chinese comment UI and English posts show an English comment UI, making the experience much more consistent.

## Show comments only on post detail pages

This was one of my own earlier pitfalls -_-

In [a previous post](/blog/giscus-comment-system-build), I described building comments with giscus. At that time, I mounted `CommentSystem` outside `BlogPostItem`, which caused:

- Comment section appears on post detail pages
- Comment section also renders on blog list item cards

Later I could hide comments on list pages with CSS, but that is still "render first, hide later," which is not elegant.

A better approach is to swizzle `BlogPostPage` and place the comment component directly in the post detail page layout:

```jsx
<BlogPostItem>{children}</BlogPostItem>

{(nextItem || prevItem) && (
	<BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
)}

<CommentSystem />
```

Then the structure becomes:

- Post content
- Previous / next post navigation
- Comment section

And blog list pages, tag pages, and author pages will no longer render the comment component, which is cleaner logically.

## Notes for local development

Default command:

```bash
yarn start
```

This starts the default locale, which is the Chinese site.

If you want to debug only the English environment directly, use:

```bash
yarn start:en
```

This is very useful for debugging English routes. Otherwise, switching via the language dropdown may throw errors and look like a code issue, while the real reason is that development mode can only run one locale at a time.

## Suggestions for internationalization

If your content is small, manual maintenance is fine. As content grows, AI suggested:

- Manage UI text with `Translate` and JSON
- Maintain full docs/blog/pages content in separate files per language
- Do not hardcode shared variables in translation JSON, such as year, links, or site name
- Always handle locale prefixes in links inside custom components

In short:

**UI text belongs to i18n JSON, content text belongs to language-specific directories, and custom logic belongs in React components.**

## Summary

After integrating i18n into this Docusaurus blog, my overall impression is:

- Official support is already quite complete
- UI-level internationalization cost is not high
- The time-consuming part is content translation and custom component adaptation

If you only need a bilingual Chinese-English blog, this Docusaurus solution is already sufficient. If I continue improving it, possible directions include:

- Translation automation workflow
- Multilingual SEO details
- Further localization for comments, page metadata, and social cards

> This part was suggested by AI. What I currently need is a workflow where I write one blog post locally, translate it into English automatically, then push and deploy online.

After adding comments and internationalization, this site is gradually becoming a real, complete website. Next step is to integrate `algolia` search. Right now, I am using Google `https://www.google.com/search?q=site%3Axingshi.blog` with domain restriction to search my own site, but no content shows up. I do not think I blocked indexing, so I need to investigate further.

## Reference
https://docusaurus.io/docs/i18n/tutorial

https://www.unicode.org/cldr/charts/48/supplemental/language_plural_rules.html

https://developer.mozilla.org/en-US/docs/Glossary/Internationalization

https://en.wikipedia.org/wiki/Language_localisation