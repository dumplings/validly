const typeIs = require('./lib/util').typeIs

const STRING = ''
const NUMBER = 0
const OBJECT = {}
const ARRAY = []
const FUNCTION = function () {}
const DATE = new Date()

function generate (type, defaults) {
  return function (value, innerDefaults) {
    if (typeIs(value) === type) {
      return value
    }
    // avoid wrong default values setting
    if (typeIs(innerDefaults) === type) {
      return innerDefaults
    }
    return defaults
  }
}

const number = generate('Number', NUMBER)
const array = generate('Array', ARRAY)
const object = generate('Object', OBJECT)
const string = generate('String', STRING)
const func = generate('Function', FUNCTION)
const date = generate('Date', DATE)

module.exports = {
  number: number,
  array: array,
  object: object,
  string: string,
  func: func,
  date: date
}
