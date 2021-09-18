const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (env) => {
  const specificConfig = require('./webpack.' + env.NODE_ENV || 'prod');
  console.log(`-------> webpack mode = ${env.NODE_ENV}`);
  return merge(commonConfig, specificConfig);
};
