'use strict'

require('core-js/modules/es6.object.define-property')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _util = require('./util')

var object = (0, _util.generate)(function (obj) {
  return (0, _util.typeIs)(obj) === 'Object'
}, {})
var _default = object
exports.default = _default
