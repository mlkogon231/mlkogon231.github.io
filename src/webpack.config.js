const path = require('path');

module.exports = {
  entry: './index.js',  // Since we're in src directory
  output: {
    path: path.resolve(__dirname, '../devsecops-dashboard/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};