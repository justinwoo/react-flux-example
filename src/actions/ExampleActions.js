var ExampleDispatcher = require('../dispatchers/ExampleDispatcher');
var ExampleConstants = require('../constants/ExampleConstants');

module.exports = {
  createRow: function (content) {
    ExampleDispatcher.handleViewAction({
      actionType: ExampleConstants.CREATE_ROW,
      content: content
    });
  }
};
