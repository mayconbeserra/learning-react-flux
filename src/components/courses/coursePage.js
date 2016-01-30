"use strict";

var React = require('react');
var Link = require('react-router').Link;
var CourseList = require('./courseList');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var Dispatcher = require('../../dispatcher/appDispatcher');
var InitialiseActions = require('../../actions/initialiseActions');

var CoursePage = React.createClass({

    getInitialState: function() {
        return {
            courses: CourseStore.getAllCourses()
        };
    },

    componentWillMount: function() {
        debugger;
        CourseStore.addChangeListener(this._onChange);
        InitialiseActions.initCourses();
    },

    componentWillUnmount: function() {
        debugger;
        CourseStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        debugger;
        this.setState({ courses: CourseStore.getAllCourses() });
    },

    render: function() {
        return (
            <div>
                <h1>Courses</h1>
                <Link to="addCourse" className="btn btn-default">Add Course</Link>
                <CourseList courses={this.state.courses} />
            </div>
        );
    }

});

module.exports = CoursePage;
