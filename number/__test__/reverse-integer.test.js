var assert = require("assert");

function test(reverse) {
  assert.strictEqual(reverse(121), 121);
  assert.strictEqual(reverse(324), 423);
  assert.strictEqual(reverse(120), 21);
  assert.strictEqual(reverse(1210), 121);
  assert.strictEqual(reverse(0), 0);
  assert.strictEqual(reverse(9), 9);
  assert.strictEqual(reverse(1), 1);
  assert.strictEqual(reverse(-1), -1);
  assert.strictEqual(reverse(-1213), -3121);
  assert.strictEqual(reverse(-1213000), -3121);
  assert.strictEqual(reverse(121300000), 3121);
  assert.strictEqual(reverse(1534236469), 0); // overflow
}

module.exports = test;
