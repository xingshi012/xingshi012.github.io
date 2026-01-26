import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docs',
    image: require('@site/static/img/custom/hp-feat-doc.webp').default,
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
    image: require('@site/static/img/custom/hp-feat-me.webp').default,
    description: (
      <>
        关于我
      </>
    ),
  },
  {
    title: 'Blog',
    url: '/blog',
    image: require('@site/static/img/custom/hp-feat-blog.webp').default,
    description: (
      <>
        博客文章
      </>
    ),
  }
];

function Feature({image, title, description, url}) {
  return (
    <a href={ url } target='_blank' className={clsx('col',styles['hpfeatCard'])}>
      <div className={ clsx('text--center', styles['featureSvg'])}>
        <img src={image} role="img" alt={title} />
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
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
