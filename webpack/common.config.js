/* global module, __dirname */
const merge = require('webpack-merge');
const path = require('path');

const ENV = process.env.NODE_ENV;
const IS_DEV = ENV === 'development';

const devtool = require('./config/devtool')(IS_DEV);
const entry = require('./config/entry')(IS_DEV);
const optimization = require('./config/optimization')(IS_DEV);
const output = require('./config/output')(IS_DEV);
const resolve = require('./config/resolve')();
const plugins = require('./config/plugins')(IS_DEV);
const moduleConfig = require('./config/module')(IS_DEV);

const common = {
    devtool,
    entry: { main: './src/index.js' },
    output,
    resolve,
    plugins,
    optimization,
    module: moduleConfig,
}

switch (ENV) {
    case 'development':
        module.exports = require('./dev.config');
        break;
    case 'production':
        module.exports = require('./prod.config');
        break;
    default:
        console.log('Target configuration not found. Valid targets: "development" or "production".');
}
