# learning-react-flux

This project is based on my studies on React, React Router, and Flux for building web applications.

It also includes some stopics like gulp, browserfy and bootstrap.

# Steps done on this project

+ Setup the gulp in the project
+ Setup the browserify in the project
+ Setup the bootstrap
+ Setup ESLint (ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code)
+ Setup React (it's a javascript library for creating user interfaces. It was built to solve one problem: building large applications with data that changes over time)
+ Setup lodash (A modern JavaScript utility library delivering modularity, performance, & extras)

# Concepts

+ React Router

# Props And State

Props - look like HTML attributes, but immutable (e.g. this.props.username)
State - holds mutable state (e.g. this.state.username)

# Lifecycle functions for each react component

+ componentWillMount

When: Before initial render, both client and server
Why: Good spot to set initial state

+ componentDidMount

When: After render
Why: Access DOM, integrate with frameworks, set timers, ajax requests

+ componentWillReceiveProps

When: when receiving new props. Not called on initial render.
Why: Set state before a render.

+ shouldComponentUpdate

When: before render when new props or state are being received.
Not called on initial render.

Why: Performance. Return false to void unnecessary re-renders.

+ componentWillUpdate

When: Immediately before rendering when new props or state are being received. Not called on initial render.
Why: Prepare for an update.

+ componentDidUpdate

When: after component's updates are flushed to the DOM. Not called for the initial render.
Why: work with the DOM after an update.

+ componentWillUnmount

When: Immediately before component is removed from the DOM.
Why: cleanup.

# Summary of Dynamic Data and Lifecycle

+ Props: Pass data to child components;
+ State: Data in controller view;
+ Lifecycle: Handle bootstrapping and third party integrations;
