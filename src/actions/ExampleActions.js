var ExampleDispatcher = require('ExampleDispatcher');
var ExampleConstants = require('ExampleConstants');

module.exports = {
  createRow: function (content) {
    ExampleDispatcher.handleViewAction({
      actionType: ExampleConstants.CREATE_ROW,
      content: content
    });
  }
};
