const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (env) => {
  const specificConfig = require('./webpack.' + env.NODE_ENV || 'prod');
  return merge(commonConfig, specificConfig);
};
