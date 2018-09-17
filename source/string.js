import { typeIs } from '../util'

const isString = str => typeIs(str) === 'String'
const string = (str, defaults) => {
  if (isString(str)) return str
  return isString(defaults) ? defaults : ''
}

export default string
