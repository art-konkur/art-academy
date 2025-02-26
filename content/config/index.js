const metaData = require('./metaData');
const themeConfig = require('./themeConfig');
const deployConfig = require('./deployConfig');
const themeAndPlugins = require('./themeAndPlugins'); // اضافه شد

module.exports = {
  ...metaData,
  ...themeAndPlugins, // اضافه شد
  ...deployConfig,
  themeConfig
};