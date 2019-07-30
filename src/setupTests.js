const setup = require('./setup/setup');
const tearDown = require('./tearDown/tearDown');

before( async () => {
  console.log('Test Setup');
  await setup();
});

after(() => {
  console.log('Test Teardown');
  tearDown();
});