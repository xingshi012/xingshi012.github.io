import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docs',
    Svg: require('@site/static/img/custom/hp-feat-docs.svg').default,
    url: '/docs/intro',
    description: (
      <>
        存放自己学过的、想学的、正在学习的一些技术，以及总结出来的文档笔记
      </>
    ),
  },
  {
    title: 'ssn',
    url: '/blog',
    Svg: require('@site/static/img/custom/hp-feat-ssn.svg').default,
    description: (
      <>
        记录自己某时的突发奇想，碎碎念
      </>
    ),
  },
  {
    title: 'Articles',
    url: '/articles',
    Svg: require('@site/static/img/custom/hp-feat-article.svg').default,
    description: (
      <>
        一些之前写过的文章归档
      </>
    ),
  },
  {
    title: 'Think',
    url: '/think',
    Svg: require('@site/static/img/custom/hp-feat-think.svg').default,
    description: (
      <>
        思维思考
      </>
    ),
  },
];

function Feature({Svg, title, description, url}) {
  return (
    <a href={ url } target='_blank' className={clsx('col col--3',styles['hpfeatCard'])}>
      <div className={ clsx('text--center', styles['featureSvg'])}>
        <Svg role="img" />
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
