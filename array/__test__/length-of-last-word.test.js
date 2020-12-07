var assert = require("assert");

function test(lengthOfLastWord) {
  assert.strictEqual(lengthOfLastWord("Hello World"), 5);
  assert.strictEqual(lengthOfLastWord(" "), 0);
  assert.strictEqual(lengthOfLastWord("               "), 0);
  assert.strictEqual(lengthOfLastWord(""), 0);
  assert.strictEqual(lengthOfLastWord("Instagram"), 9);
  assert.strictEqual(lengthOfLastWord("a"), 1);
  assert.strictEqual(lengthOfLastWord("a "), 1);
}

module.exports = test;
