module.exports = {
  entry: './src/index.dev.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
};
