import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>响应式设计</>,
    imageUrl: 'img/phone-laptop.svg',
    description: (
      <>
        MWordStar 可以兼容 PC。Pad。手机。IE 浏览器最低可兼容到 IE9。部分动画可能需要 IE10
        以上才能完美兼容。
      </>
    )
  },
  {
    title: <>代码高亮</>,
    imageUrl: 'img/laptop-code.svg',
    description: (
      <>
        MWordStar 支持 30 多种语言的代码高亮，代码高亮的主题包括 Stack
        Overflow（浅色）、Github（深色）、Sunburst（高对比度）。
      </>
    )
  },
  {
    title: <>Accessibility</>,
    imageUrl: 'img/universal-access.svg',
    description: (
      <>
        MWordStar
        针对键盘和屏幕阅读器做了大量优化，能准确传达需要朗读的内容和信息，对于视障人群来说，使用标准的屏幕阅读器基本可以无障碍操作。
      </>
    )
  },
  {
    title: <>丰富的设置选项</>,
    imageUrl: 'img/cogs.svg',
    description: (
      <>
        你可以根据偏好调整主题的外观、导航、侧边栏、文章阅读、评论区，甚至连文章代码块是否显示行号你都可以自己决定。
      </>
    )
  },
  {
    title: <>PJAX无刷新跳转</>,
    imageUrl: 'img/browser.svg',
    description: (
      <>
        当你点击链接时，浏览器会通过 AJAX
        获取和更新页面内容，不会刷新整个页面，可以实现类似于单页应用的使用体验。
      </>
    )
  },
  {
    title: <>多套配色方案</>,
    imageUrl: 'img/palette.svg',
    description: (
      <>
        MWordStar 提供了 6
        套配色方案，其中也包含深色模式的配色方案，你可以根据喜好选择配色，你还可以让访问用户切换深色或浅色模式。
      </>
    )
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img
            className={styles.featureImage}
            src={imgUrl}
            alt={title}
            style={{ width: '150px' }}
          />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`MWordstar ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/简介')}
            >
              开始使用
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
