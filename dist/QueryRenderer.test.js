'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Context = require('./Context');

var _Context2 = _interopRequireDefault(_Context);

var _QueryRenderer = require('./QueryRenderer');

var _QueryRenderer2 = _interopRequireDefault(_QueryRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('relay-query-lookup-renderer', function () {
  return function (_ref) {
    var render = _ref.render;
    return render();
  };
}); // eslint-disable-line
// eslint-disable-line

describe('relay-context/QueryRenderer', function () {
  it('works', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(
      _Context2.default,
      { environmentRegistry: { test: { value: 1 } }, defaultEnvironment: 'test' },
      _react2.default.createElement(_QueryRenderer2.default, { render: function render() {
          return _react2.default.createElement(
            'span',
            null,
            '1337'
          );
        } })
    ));

    expect(component.html()).toBe('<div><span>1337</span></div>');
  });
});