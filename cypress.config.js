const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  screenshotOnRunFailure: true,
  video: true,

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
});
