const setupGlobals = require('./globals');
const setupHelpers = require('./helpers');
const setupLogger = require('./logger');
const setupServices = require('./services');
const setupSecrets = require('./secrets');

module.exports = async () => {
  // Sync setup scripts
  setupGlobals();
  setupLogger();
  setupSecrets();
  setupHelpers();
  setupServices();
};