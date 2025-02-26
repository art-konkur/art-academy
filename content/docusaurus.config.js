// دقت کنید این تنظیمات باید دقیقاً اینجا باشند
const config = require('./config');

module.exports = {
  title: config.title,
  url: config.url,
  baseUrl: config.baseUrl,
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    ...config.themeConfig,
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true
    }
  }
};