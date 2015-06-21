robust-triangle-triangle-2d-intersect
=====================================
A slow, but robust predicate to test if two triangles intersect in the plane.  This may get improved later on, time permitting.

# Example

```javascript
var tritri = require('robust-triangle-triangle-2d-intersect')

console.log(tritri(
  [ [0, 0],
    [1, 0],
    [0, 1] ],
  [ [0.5, 0.5],
    [1.5, 0.5],
    [0.5, 1.5] ]))
```

# Install

```
npm i robust-triangle-triangle-2d-intersect
```

# API

#### `require('robust-triangle-triangle-2d-intersect')(a, b)`
Test if two plane triangles intersect

* `a,b` are triangles

**Returns** `true` if `a` intersects `b`, `false` otherwise

# License
(c) 2015 Mikola Lysenko. MIT License
