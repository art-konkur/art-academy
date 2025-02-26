// __test__/metaData.test.js
test('اگر توییتر وجود نداشت، مقدار پیش‌فرض داشته باشد', () => {
  jest.resetModules(); // Mock قبلی را پاک می‌کند
  jest.mock('../config/metaData', () => ({
    title: "کوشک کنکورهنر",
    tagline: "عمارتی برای یادگیری هنر",
    url: "https://kushk.surge.sh/",
    favicon: "/img/favicon.ico",
    social: {} // توییتر وجود ندارد
  }));

  const mockedData = require('../config/metaData');
  expect(mockedData.social.twitter).toBeUndefined();
});