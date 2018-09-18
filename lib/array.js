'use strict'

require('core-js/modules/es6.object.define-property')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _util = require('./util')

var array = (0, _util.generate)(function (arr) {
  return (0, _util.typeIs)(arr) === 'Array'
}, [])
var _default = array
exports.default = _default
