'use strict'

var tape = require('tape')
var tritri = require('../tritri2d')

tape('triangle - triangle intersection', function(t) {

  t.ok(tritri(
    [ [0, 0],
      [1, 0],
      [0, 1] ],
    [ [0.5, 0.5],
      [1.5, 0.5],
      [0.5, 1.5] ]))

  t.ok(!tritri(
    [ [0, 0],
      [1, 0],
      [0, 1] ],
    [ [2.5, 2.5],
      [7.5, 2.5],
      [2.5, 7.5] ]))


  t.end()
})
