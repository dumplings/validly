function isNotValidNumber (target) {
  return target - target !== 0
}

function typeIs (target) {
  let type = Object.prototype.toString.call(target).slice(8, -1)
  if (type === 'Number' && isNotValidNumber(target)) {
    return 'Not_Valid_Number'
  }
  return type
}

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

const number = generate('Number', 0)
const array = generate('Array', [])
const object = generate('Object', {})
const string = generate('String', '')

module.exports = {
  number: number,
  array: array,
  object: object,
  string: string,
}
