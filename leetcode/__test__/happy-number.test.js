var assert = require("assert");

function test(isHappy) {
  assert.strictEqual(isHappy(19), true);
  assert.strictEqual(isHappy(199), false);
}

module.exports = test;
