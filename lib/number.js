'use strict'

require('core-js/modules/es6.object.define-property')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _util = require('./util')

var number = (0, _util.generate)(function (num) {
  return (0, _util.typeIs)(num) === 'Number'
}, 0)
var _default = number
exports.default = _default
