// __tests__/deployConfig.test.js
const deployConfig = require('../config/deployConfig');

describe('بررسی تنظیمات deployment در Docusaurus', () => {
  test('باید مقدار trailingSlash برابر false باشد', () => {
    expect(deployConfig.trailingSlash).toBe(false);
  });

  test('باید branch اصلی برابر "main" باشد', () => {
    expect(deployConfig.deploymentBranch).toBe('main');
  });

  test('باید روی لینک‌های خراب هشدار بدهد', () => {
    expect(deployConfig.onBrokenLinks).toBe('warn');
    expect(deployConfig.onBrokenMarkdownLinks).toBe('warn');
  });
});