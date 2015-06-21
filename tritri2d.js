'use strict'

var segseg = require('robust-segment-intersect')
var rpis = require('robust-point-in-simplex')

module.exports = triangleIntersect

function triangleIntersect(a, b) {
  for(var i=0; i<3; ++i) {
    for(var j=0; j<3; ++j) {
      if(segseg(a[i], a[(i+1)%3], b[j], b[(j+1)%3])) {
        return true
      }
    }
  }
  return rpis(a, b[0]) >= 0 || rpis(b, a[0]) >= 0
}
