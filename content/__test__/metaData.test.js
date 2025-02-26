// __test__/metaData.test.js
test('اگر توییتر وجود نداشت، مقدار پیش‌فرض داشته باشد', () => {
  jest.resetModules(); // Mock قبلی را پاک می‌کند
  jest.mock('../config/metaData', () => ({
    title: "کوشک کنکورهنر",
    tagline: "عمارتی برای یادگیری هنر",
    favicon: "/img/favicon.ico",
    url: "http://kushk.surge.sh",
    baseUrl: '/',
    social: {'x': '@koushkehonar'} // توییتر وجود ندارد
  }));

  const mockedData = require('../config/metaData');
  expect(mockedData.social['@koushkehonar']).toBeUndefined();
});