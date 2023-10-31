import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Social Data Gateway',
    Svg: require('@site/static/img/icon_1.svg').default,
    description: (
      <>
       Port3 is a Web3 social data gateway. It aggregates and standardizes both off-chain and on-chain data, creating a powerful and accessible Social Data Layer for all Web3 use cases. The aim is to facilitate the transition to Web3 by bridging the gap for users.
      </>
    ),
  },
  {
    title: 'SoQuest Platform',
    Svg: require('@site/static/img/icon_2.svg').default,
    description: (
      <>
        SoQuest is a highly popular Web3 Quest platform designed to assist projects in building Web3 communities and aggregating project activities and information. It offers features for projects launch campaign to attract user participation and the ability for users to earn rewards while engaging in these activities.
      </>
    ),
  },
  {
    title: 'Blockchain Quest Language（BQL）',
    Svg: require('@site/static/img/icon_3.svg').default,
    description: (
      <>
        BQL is an open on-chain interactive markup language. We can use BQL to describe on-chain operations and submit them to the executor for execution. By combining multiple on-chain operations into a Workflow, we can achieve automated and streamlined execution of on-chain interactions.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={`${clsx('col col--4')} ${styles.columnAlignCenter}`}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="padding-horiz--md">
        <h3  style={{fontSize:24,fontWeight:600,margin:'24px 0 14px 0'}}>{title}</h3>
        <p style={{fontSize:14}}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
