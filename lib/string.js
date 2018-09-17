const util = require('../util')

const isString = function (str) {
  return util.typeIs(str) === 'String'
}

const string = util.generate(isString, '')

export default string