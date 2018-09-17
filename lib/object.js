const util = require('../util')

const isObject = function (obj) {
  return util.typeIs(obj) === 'Object'
}

const object = util.generate(isObject, {})

module.exports = object
