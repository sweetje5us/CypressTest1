const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://dev-crm.okolo.app/auth',
    specPattern: '**/examples/*',
  },
});
