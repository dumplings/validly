import { typeIs, generate } from './util'

const string = generate(str => typeIs(str) === 'String', '')

export default string
