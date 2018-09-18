'use strict'

require('core-js/modules/es6.object.define-property')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _util = require('./util')

var string = (0, _util.generate)(function (str) {
  return (0, _util.typeIs)(str) === 'String'
}, '')
var _default = string
exports.default = _default
