const router = require('express').Router();
const logger = require('winston');
const authorize = require('../middleware/authorize');

router.post('/session', (req, res) => {
  logger.info('test/session');
  logger.info(`Setting ${req.body.field} to`, req.body.value);
  req.session[req.body.field] = req.body.value;
  res.sendStatus(200);
});

router.get('/insession', (req, res) => {
  logger.info('test/insession');
  logger.info('Returning session information', req.session);
  res.json(req.session);
});

router.get('/jwt', authorize({ permissions: ['TO_DO_THINGS']}), ( req, res) =>{
  logger.info('GET /testjwt');
  res.sendStatus(200);
});

module.exports = router;
