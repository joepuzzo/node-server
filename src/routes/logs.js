const router = require('express').Router();
const logger = require('winston');
const authorize = require('../middleware/authorize');

router.get('/combined', authorize({ permissions: ['VIEW_LOGS']}), (req, res, next) => {
  logger.info('Getting combined logs');
  const options = {
    root: `${__dirname}/../../`,
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile('combined.log', options, function (err) {
    if (err) {
      next(err);
    } else {
      logger.info('Sent combined.log');
    }
  });
});

module.exports = router;
