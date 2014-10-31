require('node-jsx').install();
var React = require('react');
var express = require('express');
var ExampleApp = require('./src/components/ExampleApp');

var app = express();

app.get('/', function (req, res) {
  res.send(React.renderToString(ExampleApp()));
});

app.listen(4567);
console.log('listening on 4567');
