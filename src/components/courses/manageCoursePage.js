"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseStore = require('../../stores/courseStore');
var CourseActions = require('../../actions/courseActions');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({

    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function() {
        debugger;
        return {
            course: { id: '', title: '', watchHref: '', author: {id: -1, name: ''}, length: '', category: '' },
            authors: AuthorStore.getAllAuthors(),
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function() {
        var courseId = this.props.params.id; //from the path /course:id
        debugger;
        if (courseId) {
            var cor = CourseStore.getCourseById(courseId);
            this.setState({course: cor });
        }
    },

    setCourseState: function(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({course: this.state.course});
    },

    onAuthorChanged: function(author) {
        debugger;
        this.state.course.author = AuthorStore.getAuthorNameById(author);
        this.setState({course: this.state.course});
    },

    courseFormIsValid: function() {
        debugger;
        var formIsValid = true;

        this.state.errors = {};

        if (this.state.course.title.length < 3) {
            this.state.errors.title = "Tile must be at least 3 characteres";
            formIsValid = false;
        }

        if (this.state.course.watchHref.length < 5) {
            this.state.errors.watchHref = "Reference must be at least 5 characteres";
            formIsValid = false;
        }

        if (this.state.course.author.id && this.state.course.author.id === -1) {
            this.state.errors.author = "Author must be entered";
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});

        return formIsValid;
    },

    saveCourse: function(event) {
        debugger;
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        if (this.state.course.id) {
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }

        this.setState({ dirty: false});
        toastr.success('Course saved.');
        this.transitionTo('courses');
    },

    render: function() {
        return (
            <CourseForm course={this.state.course}
                        authors={this.state.authors}
                        onChange={this.setCourseState}
                        onSave={this.saveCourse}
                        onAuthorChanged={this.onAuthorChanged}
                        errors={this.state.errors}/>
        );
    }

});

module.exports = ManageCoursePage;
