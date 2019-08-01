const request = require('supertest');
const createApp = require('../../src/app');
 
describe('/test/session', () => {

  let app;

  beforeAll( () => {
    app = createApp();
  });

  describe('Request to /test/session', () => {

    it('should set session information', async () => {

      const agent = request.agent(app);

      await agent
        .post('/test/session')
        .send({
          field: 'foo', 
          value: 'bar'
        })
        .set('Accept', 'application/json')
        .expect(200);

      const res = await agent
        .get('/test/insession')
        .expect(200)

      expect(res.body.foo).toBe('bar');

    });
    
  });

});

