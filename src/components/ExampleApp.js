var React = require('react');
var ExampleStore = require('../stores/ExampleStore');
var ExampleActions = require('../actions/ExampleActions');
var ExampleTable = require('./ExampleTable');

module.exports = React.createClass({
  _createRow: function () {
    ExampleActions.createRow((Math.random() * 1e10 | 0).toString(36));
  },

  render: function () {
    return (
      <div className='example-app'>
        <h1>This is an example app</h1>
        <button
          className="example-button"
          onClick={this._createRow}>
          <span className="example-button-span">
            Create random row
          </span>
        </button>
        <ExampleTable
          data={this.state.data}
        />
      </div>
    );
  },

  getInitialState: function () {
    var appState = ExampleStore.getAppState();
    return {
      data: appState.data
    }
  },

  _onChange: function () {
    var appState = ExampleStore.getAppState();
    this.setState({
      data: appState.data
    });
  },

  componentDidMount: function () {
    ExampleStore.addChangeListener(this._onChange);
    this._onChange();
  },

  componentWillUnmount: function () {
    ExampleStore.removeChangeListener(this._onChange);
  }
});
