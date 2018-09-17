const util = require('../util')

const isArray = function (arr) {
  return util.typeIs(arr) === 'Array'
}

const array = util.generate(isArray, [])

module.exports = array
