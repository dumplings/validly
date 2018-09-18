import { typeIs, generate } from './util'

const number = generate(num => typeIs(num) === 'Number', 0)

export default number
