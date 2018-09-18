import { typeIs, generate } from './util'

const object = generate(obj => typeIs(obj) === 'Object', {})

export default object
