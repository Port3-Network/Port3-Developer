// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');

const  plugins=[
  webpackPlugin
]
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site', //浏览器选项卡标题
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-test-site.com', //网站网址
  baseUrl: '/',
  organizationName: 'facebook',//拥有这个仓库的 GitHub 用户或组织 
  projectName: 'docusaurus', //GitHub 仓库的名称
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      "zh-CN": {
        "label": "中文（中国）",
        "direction": "ltr",
        "htmlLang": "zh-CN",
        "calendar": "gregory",
        "path": "zh-CN"
      }
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            label: 'SoQuest API',
            to: '/api/',
          },
          {
            href: 'https://github.com/Port3-Network',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // 页脚
      footer: {
        style: 'dark',//dark or light
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community', //大标题
            items: [
              {
                label: 'Twitter', // 链接标题
                href: 'https://twitter.com/Port3Network', //超链接
              },
              {
                label: 'Telegram',
                href: 'https://t.me/port3network',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/JV5gT5cGCk',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}, Port3 Team.`, //版权声明
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    // @ts-ignore
    plugins,

};

module.exports = config;
