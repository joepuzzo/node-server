const logger = require('winston');

const fs = require('fs');

module.exports = () => {
  logger.info('Gathering secrets');
  config.jwt.privateKey = fs.readFileSync('./config/secrets/rsa.private');
  config.jwt.publicKey = fs.readFileSync('./config/secrets/rsa.public');
  config.ssl.key = fs.readFileSync('./config/ssl/private.key');
  config.ssl.cert = fs.readFileSync('./config/ssl/primary.crt');
};
