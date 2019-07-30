// Config file for deployed Spec environment
module.exports = {
  session: {
    secret: 'spec cats',
    cookie: {
      httpOnly: true, 
      maxAge: 1000 * 60 * 60 * 1 // 1h,
    },
  }, 
  jwt: {
    exp: 30, // 30s
  },
  log: { 
    console: {
      level: 'none',
    }
  },
};