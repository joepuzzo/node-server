const jwtParser = require('jsonwebtoken');
const logger = require('winston');

/**
 * Helper function that creates a JWT and signs it
 *
 * @param input token to verify
 * @param publicKey public key to verify JWT with
 */
module.exports = (input, publicKey, options = {}) => {
  logger.info('Verifying JWT');

  const opts = {
    algorithms: ['RS256'],
    issuer: 'puzzo',
    ...options 
  };

  return jwtParser.verify(input, publicKey, opts);

};

 