/** @jsx React.DOM **/
var React = require('react');
var ReactComponentWithPureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');

module.exports = React.createClass({
  mixin: [ReactComponentWithPureRenderMixin],

  render: function () {
    return (
      <td className="example-table-element">
        {this.props.children}
      </td>
    );
  }
});
