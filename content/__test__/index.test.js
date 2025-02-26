// __tests__/config.test.js
const config = require('../config'); // فایل اصلی که همه تنظیمات را ترکیب می‌کند
const metaData = require('../config/metaData');
const themeConfig = require('../config/themeConfig');
const deployConfig = require('../config/deployConfig');
const themeAndPlugins = require('../config/themeAndPlugins');

describe('بررسی ترکیب تنظیمات در config/index.js', () => {
  test('باید شامل metaData باشد', () => {
    expect(config).toMatchObject(metaData);
  });

  test('باید شامل themeConfig باشد', () => {
    expect(config.themeConfig).toEqual(themeConfig);
  });

  test('باید شامل deployConfig باشد', () => {
    expect(config).toMatchObject(deployConfig);
  });

  test('باید شامل themeAndPlugins باشد', () => {
    expect(config).toMatchObject(themeAndPlugins);
  });

  test('نباید دارای مقدار undefined باشد', () => {
    Object.values(config).forEach(value => {
      expect(value).not.toBeUndefined();
    });
  });
});