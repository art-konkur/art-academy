// config/themeConfig/navbar.js
module.exports = {
    title: 'کوشک کنکورهنر',
    logo: {
      alt: 'Kushk konkur art Logo',
      src: 'img/logo.svg',
      srcDark: 'img/logo-dark.svg',
    },
    items: [
      {to: '/docs', label: 'دانش نامه', position: 'right'},
      {to: '/blog', label: 'بلاگ', position: 'right'},
      {href: 'https://github.com', label: 'گیت‌هاب', position: 'left'},
    ]
  };