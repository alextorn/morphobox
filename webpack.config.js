/**
 * COMMON WEBPACK CONFIGURATION
 */
const target = process.env.npm_lifecycle_event;

let config = {};
/* eslint-disable global-require */
switch (target) {
  case 'build':
    config = require('./config/webpack.config.prod.js');
    break;
  default:
    config = require('./config/webpack.config.dev.js');
    break;
}
/* eslint-disable global-require */
module.exports = config;
