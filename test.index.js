const tape = require('tape')
const validly = require('./index')

const { getNumber, getString, getObject, getArray } = validly

tape('test validly.getNumber', t => {
  t.plan(2)
  t.equal(3, getNumber(3))
  t.equal('number', typeof getNumber('wrong args'))
})

tape('test validly.getString', t => {
  t.plan(2)
  t.equal('hello validly', getString('hello validly'))
  t.equal('string', typeof getString())
})

tape('test validly.getObject', t => {
  t.plan(2)
  const obj = { name: 'validly' }
  t.equal(obj, getObject(obj))
  t.equal('object', typeof getObject(1))
})

tape('test validly.getArray', t => {
  t.plan(2)
  const arr = [1, 4, 'hello']
  t.equal(arr, getArray(arr))
  t.ok(Array.isArray(getArray('hello validly')))
})
