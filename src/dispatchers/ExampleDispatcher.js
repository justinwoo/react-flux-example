var copyProperties = require('react/lib/copyProperties');
var Dispatcher = require('flux').Dispatcher;

module.exports = copyProperties(new Dispatcher, {
  handleViewAction: function (action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});
