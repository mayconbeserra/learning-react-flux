"use strict";

var React = require('react');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

var AuthorPage = React.createClass({

    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },

    componentWillMount: function() {
        debugger;
        AuthorStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        debugger;
        AuthorStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        debugger;
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },

    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;
