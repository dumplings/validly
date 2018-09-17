const tape = require('tape')
const typeIs = require('../util').typeIs
const fixtures = require('./fixtures')
const number = require('../lib/number')
const array = require('../lib/array')
const object = require('../lib/object')
const string = require('../lib/string')

const stringify = JSON.stringify

// todo
fixtures.forEach(function (f) {
  tape(`return typeof number for ${stringify(f)}`, function (t) {
    t.plan(1)
    const actual = number(f)
    const data = typeIs(f) === 'Number' ? f : 0
    t.equal(actual.toString(), data.toString())
  })
})
