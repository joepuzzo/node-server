const https = require('https');
const http = require('http');
const logger = require('winston');
const config = require('./config/config');
const createApp = require('./src/app');
const setup = require('./src/setup/setup');

const startApp = () => {  // Create the express app
  const app = createApp();

  // Define server options
  const options = {
    key: config.ssl.key,
    cert: config.ssl.cert
  };
  // Create the http server
  http.createServer(app).listen(config.http.port, () => {
    logger.info(`Http server is now running on port ${config.http.port}`);
  });

  // Create the https server
  https.createServer(options, app).listen(config.https.port, () => {
    logger.info(`Https server is now running on port ${config.https.port}`);
  });
};

const start = async () => {
  try {
    await setup();
    startApp();
  } catch (e) {
    console.log('An error occured when attempting to start application', e);
  }
};

// Start the app
start();



