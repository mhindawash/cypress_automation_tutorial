const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false, // Disable auto-reloading
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
