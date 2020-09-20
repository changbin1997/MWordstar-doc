module.exports = {
  title: 'MWordStar',
  tagline: '一个 Typecho 博客主题',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'changbin1997', // Usually your GitHub org/user name.
  projectName: 'MWordStar', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MWordStar',
      links: [
        {
          to: 'docs/doc0',
          activeBasePath: '帮助文档',
          label: '帮助文档',
          position: 'left',
        },
        {
          to: 'https://www.misterma.com/',
          label: '博客',
          position: 'left',
          target: '_blank',
        },
        {
          to: 'https://www.misterma.com/msg.html',
          label: '留言板',
          position: 'left',
          target: '_blank',
        },
        {
          to: 'https://github.com/changbin1997/MWordStar',
          label: 'Github',
          position: 'right',
          target: '_blank',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '简介',
              to: 'docs/doc0',
            },
            {
              label: '主题设置',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: '仓库',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/changbin1997/MWordStar',
            },
            {
              label: '码云',
              href: 'https://gitee.com/changbin1997/MWordStar',
            },
          ],
        },
        {
          title: '其它',
          items: [
            {
              label: '我的博客',
              href: 'https://www.misterma.com/',
            },
            {
              label: '留言板',
              href: 'https://www.misterma.com/msg.html',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MWordStar, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
