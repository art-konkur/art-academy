// حذف مقدار null از پلاگین‌ها
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'my-plugin',
        path: 'docs',
        routeBasePath: 'docs',
      },
    ],
    '@docusaurus/plugin-algolia',
  ],
};