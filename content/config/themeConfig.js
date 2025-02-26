// config/themeConfig.js
const navbar = require('./themeConfig/navbar');
const footer = require('./themeConfig/footer');

module.exports = {
  navbar,
  footer,

  colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  
  navbar: {
    hideOnScroll: false,
  },
};

