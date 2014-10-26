var ExampleDispatcher = require('ExampleDispatcher');
var EventEmitter = require('events').EventEmitter;
var ExampleConstants = require('ExampleConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _appState = {
  data: []
};

var ExampleStore = merge(EventEmitter.prototype, {
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
        console.log('Not implemented yet');
        ExampleStore.emitChange();
        break;
      }
    }

    return true; // return promise
  })
});

module.exports = ExampleStore;
