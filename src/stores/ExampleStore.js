var ExampleDispatcher = require('../dispatchers/ExampleDispatcher');
var EventEmitter = require('events').EventEmitter;
var ExampleConstants = require('../constants/ExampleConstants');
var assign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var _appState = {
  data: []
};

// expose appstate for debugging
global.appState = _appState;

function generateRandom() {
  return (Math.random() * Date.now() | 0).toString(36);
}

function createRow(content) {
  _appState.data.push({
    id: generateRandom(),
    content: content,
    metadata: [
      generateRandom(),
      generateRandom(),
      generateRandom(),
      generateRandom(),
      generateRandom(),
      generateRandom(),
      generateRandom(),
      generateRandom(),
      generateRandom()
    ]
  });
}

var ExampleStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAppState: function () {
    return _appState;
  },

  dispatcherIndex: ExampleDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
      case ExampleConstants.CREATE_ROW: {
        createRow(action.content);
        ExampleStore.emitChange();
        break;
      }
    }

    return true; // return promise
  })
});

module.exports = ExampleStore;
