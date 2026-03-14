import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageBanner from '@site/src/components/HomepageBanner';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({id: 'homepage.title', message: 'Xingshi Blog'})}
      description={translate({id: 'homepage.description', message: 'Description will go into a meta tag in <head />'})}>
      <HomepageBanner/>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
