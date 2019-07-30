const fs = require('fs');
const path = require('path');

const setup = () => {
  fs.readdirSync(path.join(__dirname, '../services')).forEach((file) => {
    const service = file.replace('.js', '');
    services[service] = require('../service/' + file);
  });
};

module.exports = setup;