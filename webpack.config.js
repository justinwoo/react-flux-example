var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './build/',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      loader: 'jsx-loader'
    }]
  },
  resolve: {
    alias: {
      ExampleStore$: path.join(__dirname, 'src/stores/ExampleStore.js'),
      ExampleDispatcher$: path.join(__dirname, 'src/dispatchers/ExampleDispatcher.js'),
      ExampleConstants$: path.join(__dirname, 'src/constants/ExampleConstants.js'),
      ExampleActions$: path.join(__dirname, 'src/actions/ExampleActions.js'),
      propsEqual$: path.join(__dirname, 'src/utils/propsEqual.js')
    }
  }
};
