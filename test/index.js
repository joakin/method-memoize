
var test = require('tape');
var memoize = require('../index');

function Multiply(n) {
  this.n = n;
}

Multiply.prototype.by = memoize(function(x) {
  return this.n * (x || 1);
});

test(function(t) {
  var five = new Multiply(5);
  var seven = new Multiply(7);
  t.equal(five.by(5), 25);
  t.equal(seven.by(3), 21);
  // These are cached
  t.equal(five.by(5), 25);
  t.equal(seven.by(3), 21);
  t.end();
});

