'use strict'

require('core-js/modules/es6.object.define-property')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.generate = exports.typeIs = void 0

require('core-js/modules/es6.regexp.to-string')

require('core-js/modules/es6.date.to-string')

var typeIs = function typeIs (value) {
  var type = Object.prototype.toString.call(value).slice(8, -1)
  if (type === 'Number' && value - value !== 0) return 'Not_Valid_Number'
  return type
}

exports.typeIs = typeIs

var generate = function generate (verify, generateDefaults) {
  return function (value, defaults) {
    if (verify(value)) return value
    if (verify(defaults)) return defaults
    return generateDefaults
  }
}

exports.generate = generate
