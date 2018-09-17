const util = require('../util')

const isNumber = function (num) {
  return util.typeIs(num) === 'Number'
}

const number = util.generate(isNumber, 0)

module.exports = number
