import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docs',
    Svg: require('@site/static/img/custom/undraw_programming_doc.svg').default, 
    url: '/docs/intro',
    description: (
      <>
        <Translate id="homepage.features.docs.desc">文档笔记</Translate>
      </>
    ),
  },
  {
    title: 'About me',
    url: '/about',
    Svg: require('@site/static/img/custom/undraw_chill-guy-avatar_me.svg').default,
    description: (
      <>
        <Translate id="homepage.features.about.desc">关于我</Translate>
      </>
    ),
  },
  {
    title: 'Blog',
    url: '/blog',
    Svg: require('@site/static/img/custom/undraw_book-writer_blog.svg').default,
    description: (
      <>
        <Translate id="homepage.features.blog.desc">博客文章</Translate>
      </>
    ),
  }
];

function Feature({Svg, image, title, description, url}) {
  return (
    <a href={ url } target='_blank' className={clsx('col',styles['hpfeatCard'])}>
      <div className={ clsx('text--center', styles['featureSvg'])}>
        <Svg role="img" aria-label={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  const {i18n: {currentLocale, defaultLocale}} = useDocusaurusContext();
  const localizedUrl = (path) => currentLocale === defaultLocale ? path : `/${currentLocale}${path}`;
  
  return (
    <section className={styles.features}>
      <div className="{styles.HPFeaturesContainer}">
        <div className={styles.HPFeaturesRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} url={localizedUrl(props.url)} />
          ))}
        </div>
      </div>
    </section>
  );
}
