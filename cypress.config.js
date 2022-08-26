const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
    baseUrl: 'https://dev-crm.okolo.app/',
    specPattern: '**/examples/*',
  },
});
