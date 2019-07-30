const fs = require('fs');
const jwtParser = require('jsonwebtoken');

const privateKey = fs.readFileSync('./rsa.private');
const publicKey = fs.readFileSync('./rsa.public');

console.log('Private Key:', privateKey.toString());
console.log('Public Key:', publicKey.toString());

const inputOpts = {
	algorithm: 'RS256',
  expiresIn: 30 * 60, 
  issuer: 'joe'
};

const input = {
	test: 'foobar'
};

const jwt = jwtParser.sign( input, privateKey, inputOpts);

console.log( jwt );

const verifyOpts = {
  algorithms: ['RS256'],
  issuer: 'joe'
};

try {
  const decodedJwt = jwtParser.verify(jwt, publicKey, verifyOpts);
  console.log('Decoded JWT:', decodedJwt);
} catch ( error ) {
  console.log('JWT could not be verified.', error);
}
