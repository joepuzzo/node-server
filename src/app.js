const express = require('express');
const health = require('./routes/health');
const logs = require('./routes/logs');
const test = require('./routes/test');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('winston');
const handleError = require('./middleware/handleError');

module.exports = () => {

  // Setup scripts
  logger.info('Building app.');

  // Create new express app
  const app = express();

  // Add external middleware
  app.use(cors(config.cors));
  app.use(bodyParser.json());
  app.use(session(config.session));

  // Test endpoints
  if( process.env.NODE_ENV === 'spec' ){
    app.use('/test', bodyParser.json(), test);
  }

  // Health endpoints
  app.use(health);

  // Add logging endpoints
  app.use('/logs', logs);
  
  // Add error handler
  app.use(handleError);

  return app;

};