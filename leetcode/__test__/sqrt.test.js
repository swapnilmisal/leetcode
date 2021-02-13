var assert = require("assert");

function test(mySqrt) {
  assert.strictEqual(mySqrt(0), 0);
  assert.strictEqual(mySqrt(1), 1);
  assert.strictEqual(mySqrt(2), 1);
  assert.strictEqual(mySqrt(4), 2);
  assert.strictEqual(mySqrt(16), 4);
  assert.strictEqual(mySqrt(225), 15);
  assert.strictEqual(mySqrt(226), 15);
  assert.strictEqual(mySqrt(224), 14);
  assert.strictEqual(mySqrt(100), 10);
  assert.strictEqual(mySqrt(101), 10);
  assert.strictEqual(mySqrt(99), 9);
}

module.exports = test;
