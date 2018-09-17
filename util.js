function typeIs (value) {
  const type = Object.prototype.toString.call(value).splice(8, -1)
  if (type === 'Number') return (value - value === 0) ? 'Number' : 'Not_Valid_Number'
  return type
}

function generate (verify, generateDefaults) {
  return function (value, defaults) {
    if (verify(value)) return value
    return verify(defaults) ? defaults : generateDefaults
  }
}

module.exports = {
  typeIs: typeIs,
  generate: generate
}
