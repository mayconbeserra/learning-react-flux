"use strict";

var React = require('react');

var DropDown = React.createClass({

    onFormChange: function() {
        var val = React.findDOMNode(this.refs.dropdown).value;
        this.props.dropDownValueChanged(val);
    },

    render: function() {

        var options = [];
        var fieldName = this.props.field;

        options.push(<option key='-1' value='' >------</option>);

        if(this.props.options) {
            this.props.options.forEach(function(option) {
                var valueOfField = option[fieldName];
                options.push(<option key={option.id} value={option.id}>{valueOfField}</option>);
            });
        }

        var wrapperClass = 'form-group';

        if (this.props.error && this.props.error.length > 0) {
          wrapperClass += " " + 'has-error';
        }

        return (
          <div className={wrapperClass}>
            <label htmlFor={this.props.value}>{this.props.label}</label>
            <div className="field">

            <select className="form-control" ref='dropdown' value={this.props.value ? this.props.value.id : ''} onChange={this.onFormChange}>
              {options}
            </select>

              <div className="input">{this.props.error}</div>
            </div>
          </div>
        );
    }
});

module.exports = DropDown;
