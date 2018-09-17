import { typeIs } from '../util'

const isObject = obj => typeIs(obj) === 'Object'
const object = (obj, defaults) => {
  if (isObject(obj)) return obj
  return isObject(defaults) ? defaults : {}
}

export default object
