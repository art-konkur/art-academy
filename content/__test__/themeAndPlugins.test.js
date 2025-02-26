// __tests__/plugins.test.js
const config = require('../config/themeConfig');

test('پلاگین‌ها نباید شامل مقدار null یا undefined باشند', () => {
  expect(config.plugins).toBeDefined(); // بررسی می‌کند که آرایه وجود دارد
  expect(Array.isArray(config.plugins)).toBe(true); // بررسی می‌کند که مقدار plugins یک آرایه است

  // بررسی اینکه هیچ مقدار null یا undefined درون آرایه نیست
  config.plugins.forEach(plugin => {
    expect(plugin).not.toBeNull();
    expect(plugin).not.toBeUndefined();
  });
});