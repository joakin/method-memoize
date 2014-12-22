
method-memoize
==============

Method decorator to memoize class instance methods. Like the normal memoize but
this one doesn't share a cache between instances. Each instance gets its own
cache.

https://www.npmjs.com/package/method-memoize

```
npm install --save method-memoize
```

### Usage

```
var memoize = require('method-memoize');

function Multiply(n) {
  this.n = n;
}

Multiply.prototype.by = memoize(function(x) {
  return this.n * (x || 1);
});

var five = new Multiply(5);
var seven = new Multiply(7);
// Cache misses
equal(five.by(5), 25);
equal(seven.by(3), 21);
// These are already cached
equal(five.by(5), 25);
equal(seven.by(3), 21);
// This one is not, because it is a different instance
var five2 = new Multiply(5);
equal(five2.by(5), 25);

function equal(a, b) {
  console.log(a+'==='+b, a === b);
}
```

### Why?

When you want a normal memoize, but the functions depend on the guts of `this`,
it is sometimes useful to memoize methods based on instance. Obviously if the
guts of the object keep on mutating this memoization won't be useful and will
give incorrect results.

