'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enzyme = require('enzyme');

var _Context = require('./Context');

var _Context2 = _interopRequireDefault(_Context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentWithContext = function (_Component) {
  _inherits(ComponentWithContext, _Component);

  function ComponentWithContext() {
    _classCallCheck(this, ComponentWithContext);

    return _possibleConstructorReturn(this, (ComponentWithContext.__proto__ || Object.getPrototypeOf(ComponentWithContext)).apply(this, arguments));
  }

  _createClass(ComponentWithContext, [{
    key: 'render',
    value: function render() {
      var defaultEnvironment = this.context.defaultEnvironment;


      return _react2.default.createElement(
        'span',
        null,
        defaultEnvironment
      );
    }
  }]);

  return ComponentWithContext;
}(_react.Component);

ComponentWithContext.contextTypes = {
  defaultEnvironment: _propTypes2.default.string
};


describe('relay-context/Context', function () {
  it('adds the child-context', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(
      _Context2.default,
      { environmentRegistry: { test: { value: 1337 } }, defaultEnvironment: 'test' },
      _react2.default.createElement(ComponentWithContext, null)
    ));

    expect(component.find(ComponentWithContext).html()).toBe('<span>test</span>');
  });
});