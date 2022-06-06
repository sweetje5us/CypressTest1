const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://dev-pbase.okolo.app/',
    specPattern: '**/examples/*'
  },
});
