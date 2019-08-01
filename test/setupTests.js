const setup = require('../src/setup/setup');
const tearDown = require('../src/tearDown/tearDown');

beforeAll( async () => {
  console.log('Test Setup');
  await setup();
});

afterAll(() => {
  console.log('Test Teardown');
  tearDown();
});