const tape = require('tape')
const inspect = require('util').inspect
const typeIs = require('../lib/util').typeIs
const validly = require('../')

const {
  array,
  number,
  object,
  string,
  func,
  date
} = validly

const emptyFn = function () {}

const initialData = [
  undefined,
  null,
  NaN,
  Infinity,
  0,
  -1,
  [],
  [1, 2],
  new Date(),
  '',
  'validly',
  {},
  { name: 'validly' },
  emptyFn
]

const generate = (defaults, type) =>
  initialData.map(data => {
    let result = defaults
    if (typeIs(data) === type) {
      result = data
    }
    return {
      value: data,
      expected: result
    }
  })

// Array test
generate([], 'Array').forEach(f =>
  tape(`expected ${inspect(f.expected)} for ${inspect(f.value)}`, t => {
    t.plan(1)
    const result = array(f.value)
    t.equal(inspect(result), inspect(f.expected))
  }))

// Number test
generate(0, 'Number').forEach(f =>
  tape(`expected ${inspect(f.expected)} for ${inspect(f.value)}`, t => {
    t.plan(1)
    const result = number(f.value)
    t.equal(inspect(result), inspect(f.expected))
  }))

// Ojbect test
generate({}, 'Object').forEach(f =>
  tape(`expected ${inspect(f.expected)} for ${inspect(f.value)}`, t => {
    t.plan(1)
    const result = object(f.value)
    t.equal(inspect(result), inspect(f.expected))
  }))

// String
generate('', 'String').forEach(f =>
  tape(`expected ${inspect(f.expected)} for ${inspect(f.value)}`, t => {
    t.plan(1)
    const result = string(f.value)
    t.equal(inspect(result), inspect(f.expected))
  }))

// Function test
generate(emptyFn, 'Function').forEach(f => {
  tape(`expected Function type for ${String(f.value)}`, t => {
    t.plan(1)
    const result = func(f.value)
    t.equal(typeIs(result), 'Function')
  })
})

// Date test
// Function test
generate(new Date(), 'Date').forEach(f => {
  tape(`expected Date type for ${String(f.value)}`, t => {
    t.plan(1)
    const result = date(f.value)
    t.equal(typeIs(result), 'Date')
  })
})
