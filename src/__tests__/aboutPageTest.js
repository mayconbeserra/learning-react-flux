jest.dontMock('../components/about/aboutPage.js');
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var Expect = require('expect');
var AboutPage = require('../components/about/aboutPage');

describe('Test the about page', function() {

  it('show the screen', function() {

    var page = new AboutPage();
    var renderer = TestUtils.createRenderer();
    renderer.render(<AboutPage />);

    var output = renderer.getRenderOutput();

    expect(output.props.children[0].props.children).toEqual('About');

  });

});
