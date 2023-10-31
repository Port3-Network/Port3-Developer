import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BgMask from '../assets/svg/bg_mask.svg'
import Tips from '../assets/svg/tips.svg'
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <BgMask />
      <div className={clsx(styles.headerTitle)}>
        <div>
          <h2 className={clsx(styles.headerTitleH2)}>Port3 Network</h2>
          <h2 className={clsx(styles.headerTitleH2, styles.colorYellow)}>Web3 Social Data Gateway.</h2>
          </div>
        <Tips />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
