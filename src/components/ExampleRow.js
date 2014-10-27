/** @jsx React.DOM **/
var React = require('react');
var ExampleElement = require('./ExampleElement');

module.exports = React.createClass({
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
