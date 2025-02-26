// __tests__/themeConfig.test.js
const themeConfig = require('../config/themeConfig');

test('تنظیمات ناوبری و فوتر به درستی مقداردهی شده‌اند', () => {
  expect(themeConfig.navbar).toBeDefined();
  expect(themeConfig.footer).toBeDefined();
});

test('حالت رنگی (colorMode) باید مقدار پیش‌فرض درست داشته باشد', () => {
  expect(themeConfig.colorMode).toBeDefined();
  expect(themeConfig.colorMode.defaultMode).toBe('light');
  expect(themeConfig.colorMode.disableSwitch).toBe(false);
  expect(themeConfig.colorMode.respectPrefersColorScheme).toBe(true);
});

test('تنظیمات ناوبری باید دارای مقدار `hideOnScroll` باشد', () => {
  expect(themeConfig.navbar.hideOnScroll).toBe(false);
});