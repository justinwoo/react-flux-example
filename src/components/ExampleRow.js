/** @jsx React.DOM **/
var React = require('react');
var ExampleElement = require('./ExampleElement');
var ReactComponentWithPureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var propsEqual = require('propsEqual');

module.exports = React.createClass({
  //mixin: [ReactComponentWithPureRenderMixin],

  shouldComponentUpdate: function (nextProps) {
    return !propsEqual(this.props, nextProps);
  },

  render: function () {
    var metadata = this.props.entry.metadata.map(function (entry) {
      return (
        <ExampleElement key={entry}>
          {entry}
        </ExampleElement>
      );
    });
    return (
      <tr className="example-table-row">
        <ExampleElement>
          {this.props.entry.id}
        </ExampleElement>
        <ExampleElement>
          {this.props.entry.content}
        </ExampleElement>
        {metadata}
      </tr>
    );
  }
});
