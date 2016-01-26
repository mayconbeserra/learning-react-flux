"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorAPI');

var InitialiseActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALISE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    }
};

module.exports = InitialiseActions;
