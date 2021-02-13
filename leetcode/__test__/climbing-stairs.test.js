var assert = require("assert");

function test(climbStairs) {
  assert.strictEqual(climbStairs(2), 2);
  assert.strictEqual(climbStairs(3), 3);
  assert.strictEqual(climbStairs(15), 987);
  assert.strictEqual(climbStairs(40), 165580141);
}

module.exports = test;
