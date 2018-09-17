import { typeIs } from './util'

const isNumber = num => typeIs(num) === 'Number'
const isString = str => typeIs(str) === 'String'
// ...
const typeValid = {
  isNumber,
  isString
}

const valid = type => {
  let typeFn
  let defaults
  switch (type) {
    case 'Number':
      typeFn = isNumber
      defaults = 0
      break
    case 'String':
      typeFn = isString
      defaults = ''
      break
  }
  return (arg1, arg2) => {
    if (typeFn(arg1)) return arg1
    return typeFn(arg2) ? arg2 : defaults
  }
}
