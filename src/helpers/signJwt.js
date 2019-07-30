const jwt = require('jsonwebtoken');
const logger = require('winston');

/**
 * Helper function that creates a JWT and signs it
 *
 * @param input payload to encode in a signed JWT
 * @param privateKey private key to sign JWT with
 */
module.exports = (input, privateKey, options = {}) => {
  logger.info('Encodeing JWT');

  if( !options.expiresIn && !input.exp ){
    throw Error('Please provide an expiration or expiresIn option');
  }

  const opts = {
    algorithm: 'RS256',
    issuer: 'puzzo',
    ...options 
  };

  return jwt.sign( input, privateKey, opts);
};

 