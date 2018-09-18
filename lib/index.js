'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _array = _interopRequireDefault(require('./array'))

var _number = _interopRequireDefault(require('./number'))

var _object = _interopRequireDefault(require('./object'))

var _string = _interopRequireDefault(require('./string'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var _default = {
  array: _array.default,
  number: _number.default,
  object: _object.default,
  string: _string.default
}
exports.default = _default
