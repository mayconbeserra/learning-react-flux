"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        debugger;
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function() {
        return _authors;
    },

    getAuthorById: function(id) {
        return _.find(_authors, {id: id});
    },

    getAuthorNameById: function(id) {
        var author = _.find(_authors, {id: id});
        var result = {id: author.id, name: author.firstName + ' ' + author.lastName};
        return result;
    }
});

Dispatcher.register(function(action) {
    switch (action.actionType) {
      case ActionTypes.INITIALISE:
        _authors = action.initialData.authors;
        AuthorStore.emitChange();
        break;
      case ActionTypes.CREATE_AUTHOR:
        _authors.push(action.author);
        AuthorStore.emitChange();
        break;
      case ActionTypes.UPDATE_AUTHOR:
        var existingAuthor = _.find(_authors, {id: action.author.id});
        var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
        _authors.splice(existingAuthorIndex, 1, action.author);
        AuthorStore.emitChange();
        break;
      case ActionTypes.DELETE_AUTHOR:
        console.log('Store => Notify Views');
        _.remove(_authors, function(author) {
            return action.id === author.id;
        });
        AuthorStore.emitChange();
        break;
      default:
        // no operation
    }
});

module.exports = AuthorStore;
