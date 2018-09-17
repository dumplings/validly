import { typeIs } from '../util'

const isNumber = num => typeIs(num) === 'Number'
const number = (num, defaults) => {
  if (isNumber(num)) return num
  return isNumber(defaults) ? defaults : 0
}

export default number
