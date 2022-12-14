const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      "dev":"https://www.babbangona.com",
      "staging":"https://www.facebook.com",
      "prod":"https://www.google.com"
    },
  },
});
