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
    description: <>主题可以兼容 PC。Pad。手机。IE 浏览器最低可兼容到 IE9。部分动画可能需要 IE10 以上才能完美兼容。</>,
  },
  {
    title: <>代码高亮</>,
    imageUrl: 'img/laptop-code.svg',
    description: (
      <>
        主题支持 30 多种语言的代码高亮，代码高亮的主题是 VS2015 的暗色主题，和
        Visual Studio Code 的默认主题差不多。
      </>
    ),
  },
  {
    title: <>Accessibility</>,
    imageUrl: 'img/universal-access.svg',
    description: (
      <>
        主题针对键盘和屏幕阅读器做了大量优化，能准确传达需要朗读的内容和信息，对于盲人来说，使用标准的屏幕阅读器基本可以无障碍操作。
      </>
    ),
  },
  {
    title: <>丰富的设置选项</>,
    imageUrl: 'img/cogs.svg',
    description: (
      <>
        主题提供了丰富的设置选项，您可以根据喜好调整主题的配色、元素风格、侧边栏组件、以及个区域的显示和隐藏等。
      </>
    ),
  },
  {
    title: <>Emoji表情</>,
    imageUrl: 'img/smile-wink.svg',
    description: (
      <>
        在评论区包含一个 Emoji 表情面板，目前共有 1466
        个表情，这些表情都是按照分类动态加载的，您不用担心性能问题。
      </>
    ),
  },
  {
    title: <>文章归档</>,
    imageUrl: 'img/archive.svg',
    description: (
      <>
        主题提供了多种文章归档方案，其中包括按月份的侧边栏归档组件，按日期的侧边栏日历组件，按时间线的独立页归档模板。
      </>
    ),
  },
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
              to={useBaseUrl('docs/doc0')}
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
