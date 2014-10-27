var React = require('react');
var ExampleApp = require('./components/ExampleApp');
var ExampleActions = require('ExampleActions');

React.renderComponent(ExampleApp(), document.getElementById('main'));

global.createRow = function () {
    ExampleActions.createRow((Math.random() * 1e10 | 0).toString(36));
}
