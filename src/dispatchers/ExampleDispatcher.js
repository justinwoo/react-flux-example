var assign = require('react/lib/Object.assign');
var Dispatcher = require('flux').Dispatcher;

module.exports = assign(new Dispatcher, {
  handleViewAction: function (action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});
