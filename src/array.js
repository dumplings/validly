import { typeIs, generate } from './util'

const array = generate(arr => typeIs(arr) === 'Array', [])

export default array
