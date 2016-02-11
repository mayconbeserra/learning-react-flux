jest.dontMock('../components/authors/authorPage.js');
jest.dontMock('../components/authors/authorList.js');
jest.dontMock('../components/authors/manageAuthorPage.js');
jest.dontMock('../components/authors/authorForm.js');
jest.dontMock('../api/authorAPI');
jest.dontMock('../api/courseAPI');
jest.dontMock('../api/authorData');
jest.dontMock('../dispatcher/appDispatcher');
jest.dontMock('../constants/actionTypes');
jest.dontMock('../actions/initialiseActions');
jest.dontMock('../actions/authorActions');
jest.dontMock('../stores/authorStore');
jest.dontMock('../reactRouterContext');
jest.dontMock('object-assign');
jest.dontMock('react-router');

var React = require('react');
var Expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var AuthorPage = require('../components/authors/authorPage');
var AuthorStore = require('../stores/authorStore');
var ReactRouterContext = require('../reactRouterContext.js');
var InitialiseActions = require('../actions/initialiseActions');

describe('AuthorPage - Loading', function() {

  var page;

  beforeEach(function() {
    AuthorPage = ReactRouterContext(AuthorPage);
    page = TestUtils.renderIntoDocument(<AuthorPage />);
    InitialiseActions.initApp();
  });

  it('should exists', function() {
    expect(TestUtils.isCompositeComponent(page)).toBeTruthy();
  });

  it('should have a title as Authors when someone open it', function() {
    var element = TestUtils.findRenderedDOMComponentWithTag(page, "h1");
    expect(element.textContent).toEqual('Authors');
  });

  it('should have three authors in the grid', function() {
    var element = TestUtils.findRenderedDOMComponentWithTag(page, "table");
    expect(element.children[1].children.length).toEqual(3);
  });

});

describe('AuthorPage - After clicking on the delete link', function() {

  var page;

  beforeEach(function() {
    AuthorPage = ReactRouterContext(AuthorPage);
    page = TestUtils.renderIntoDocument(<AuthorPage />);
    InitialiseActions.initApp();
  });

  it('the selected author should be deleted', function() {
    var element = TestUtils.findRenderedDOMComponentWithTag(page, "table");
    var deleteLink = element.children[1].children[1].children[0];

    TestUtils.Simulate.click(deleteLink.children[0]);

    //Get the updated UI
    element = TestUtils.findRenderedDOMComponentWithTag(page, "table");
    expect(element.children[1].children.length).toEqual(2);
  });

});
