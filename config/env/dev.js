// Config file for deployed Dev environment
module.exports = {
  session: {
    secret: 'dev cat',
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 8 // 8h
    },
  },
  jwt: {
    exp: 60 * 30, //30minutes
  },
  log: {
    console: {
      level: 'debug',
    },
    file: {
      level: 'debug',
      tailable: true,
      filename: 'combined.log',
      handleExceptions: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    }
  },
};