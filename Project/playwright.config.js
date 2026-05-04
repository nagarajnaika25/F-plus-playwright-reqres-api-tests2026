require('dotenv').config();

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // ✅ Added HTML Reporter to generate the report folder
  reporter: [['html', { open: 'never' }]], 
  
  // ✅ Increased global timeout to handle DemoQA slowness
  timeout: 40000, 

  use: {
    baseURL: 'https://demoqa.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    // ✅ Added actionTimeout to prevent individual steps from hanging
    actionTimeout: 15000, 
  }
});