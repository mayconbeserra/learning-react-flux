"use strict";

var React = require('react');
var Input = require('../common/textInput');
var DropDown = require('../common/dropDown');

var CourseForm = React.createClass({

    propTypes: {
        course: React.PropTypes.object.isRequired,
        authors: React.PropTypes.array.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    checkAuthorExists: function() {

        var authorExists = false;

        if(this.props.authors) {
            var ids = this.props.authors.map(function(x) {
                return x.id;
            });

            if(ids.indexOf(this.props.course.author.id) >= 0 ) {
                authorExists = true;
            }
        }
    },

    render: function() {

        var authorExists = this.checkAuthorExists();

        return (
            <form>
                <h1>Manage Course</h1>
                <Input
                      name="title"
                      label="Title"
                      value={this.props.course.title}
                      onChange={this.props.onChange}
                      error={this.props.errors.title} />
                <Input
                      name="watchHref"
                      label="Reference"
                      value={this.props.course.watchHref}
                      onChange={this.props.onChange}
                      error={this.props.errors.watchHref} />
                <DropDown
                      label="Author"
                      options={this.props.authors}
                      field="firstName"
                      dropDownValueChanged={this.props.onAuthorChanged}
                      value={authorExists ? this.props.course.author.id : ''}
                      error={this.props.errors.author} />
                <Input
                      name="length"
                      label="Length"
                      value={this.props.course.length}
                      onChange={this.props.onChange}
                      error={this.props.errors.length} />
                <Input
                      name="category"
                      label="Category"
                      value={this.props.course.category}
                      onChange={this.props.onChange}
                      error={this.props.errors.category} />
                <input type="submit" value="save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );

    }

});

module.exports = CourseForm;
