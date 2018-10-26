// filter NaN && Infinity
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

module.exports = {
  typeIs: typeIs
}
