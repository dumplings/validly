const tape = require('tape')
const validly = require('./index')

const { number, object, string, array } = validly

tape('test validly.number', t => {
  t.plan(2)
  t.equal(3, number(3))
  t.equal('number', typeof number('wrong args'))
})

tape('test validly.string', t => {
  t.plan(2)
  t.equal('hello validly', string('hello validly'))
  t.equal('string', typeof string())
})

tape('test validly.object', t => {
  t.plan(2)
  const obj = { name: 'validly' }
  t.equal(obj, object(obj))
  t.equal('object', typeof object(1))
})

tape('test validly.array', t => {
  t.plan(2)
  const arr = [1, 4, 'hello']
  t.equal(arr, array(arr))
  t.ok(Array.isArray(array('hello validly')))
})
