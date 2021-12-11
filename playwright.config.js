import('@playwright/test').PlaywrightTestConfig
const config = {
    retries: 1,
    use: {
      trace: 'on-first-retry',
      headless: true,
      channel: "chrome"
    },
  };
  
  module.exports = config;