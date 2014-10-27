/** @jsx React.DOM **/
var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <td className="example-table-element">
        {this.props.children}
      </td>
    );
  }
});
