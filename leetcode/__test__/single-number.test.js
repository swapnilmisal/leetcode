var assert = require("assert");

function test(singleNumber) {
  assert.strictEqual(singleNumber([2, 2, 1]), 1);
  assert.strictEqual(singleNumber([4, 1, 2, 1, 2]), 4);
  assert.strictEqual(singleNumber([0, 0, 0, 0, 6]), 6);
  assert.strictEqual(singleNumber([6, 6, 2, 4, 4]), 2);
  assert.strictEqual(singleNumber([6, 6, -2, 4, 4]), -2);
  assert.strictEqual(singleNumber([0]), 0);
  assert.strictEqual(singleNumber([1]), 1);
  assert.strictEqual(singleNumber([-1]), -1);
}

module.exports = test;
