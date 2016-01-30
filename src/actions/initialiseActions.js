"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorAPI');
var CourseApi = require('../api/courseAPI');

var InitialiseActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALISE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    },
    initCourses: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALISE_COURSES,
            initialData: {
                courses: CourseApi.getAllCourses()
            }
        });
    }
};

module.exports = InitialiseActions;
