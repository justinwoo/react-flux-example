var React = require('react');
var ExampleRow = require('./ExampleRow');

module.exports = React.createClass({
  render: function () {
    var exampleRows = this.props.data.map(function (entry) {
      return (
        <ExampleRow
          key={entry.id}
          entry={entry}
        />
      );
    });
    return (
      <table className="example-table">
        <thead className="example-table-header">
          <tr className="example-table-header-row">
            <th className="example-id-header">
              ID
            </th>
            <th className="example-content-header">
              Content
            </th>
          </tr>
        </thead>
        <tbody className="example-table-body">
          {exampleRows}
        </tbody>
      </table>
    );
  }
});
