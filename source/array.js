import { typeIs } from '../util'

const isArray = arr => typeIs(arr) === 'Array'
const array = (arr, defaults) => {
  if (isArray(arr)) return arr
  return isArray(defaults) ? defaults : []
}

export default array
