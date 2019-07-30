// Config file for deployed Test environment
module.exports = {
  https: {
    port: 8443
  },
  http: {
    port: 8080
  },
  session: {
    secret: 'test cats',
    cookie: {
      httpOnly: true, 
      maxAge: 1000 * 60 * 60 * 1 // 1h,
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