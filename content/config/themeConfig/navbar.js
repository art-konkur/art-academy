// config/themeConfig/navbar.js
module.exports = {
    title: 'کوشک کنکورهنر',
    logo: {
      alt: 'Kushk konkur art Logo',
      src: 'img/logo.svg',
      srcDark: 'img/logo-dark.svg',
      padding: '2em'
    },
    items: [
      {to: '/docs', label: 'دانش نامه', position: 'right'},
      {to: '/blog', label: 'بلاگ', position: 'right'},
      {to: '/blog', label: 'اخبار', position: 'right'},
      {href: 'https://github.com', label: 'گیت‌هاب', position: 'left'},
    ]
  };