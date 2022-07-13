const jwt = require('jsonwebtoken');

const secret = 'secret';

const JWT = (email) => {
  const jwtConfig = {
    expiresIn: '5d',
    algorithm: 'HS256',
  };
  return jwt.sign({ data: email }, secret, jwtConfig);
};

module.exports = {
  JWT,
};