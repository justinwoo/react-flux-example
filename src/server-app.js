//module.exports = require('./components/ExampleApp');
var React = require('react');
var ExampleApp = require('./components/ExampleApp');
module.exports = function () {
  return React.renderToString(<ExampleApp/>);
}
