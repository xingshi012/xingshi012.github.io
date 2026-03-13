import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docs',
    Svg: require('@site/static/img/custom/undraw_programming_doc.svg').default, 
    url: '/docs/intro',
    description: (
      <>
        文档笔记
      </>
    ),
  },
  {
    title: 'About me',
    url: '/about',
    Svg: require('@site/static/img/custom/undraw_chill-guy-avatar_me.svg').default,
    description: (
      <>
        关于我
      </>
    ),
  },
  {
    title: 'Blog',
    url: '/blog',
    Svg: require('@site/static/img/custom/undraw_book-writer_blog.svg').default,
    description: (
      <>
        博客文章
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
  return (
    <section className={styles.features}>
      <div className="{styles.HPFeaturesContainer}">
        <div className={styles.HPFeaturesRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
