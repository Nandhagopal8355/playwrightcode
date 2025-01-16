// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  
  timeout: 180000,
  workers: 3,
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    
    trace: 'on-first-retry',
    video: 'off',
    screenshot: 'on',
    browserName: 'chromium',
    headless: false,
    args: ['--start-maximized']
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },



  ],

  
});

