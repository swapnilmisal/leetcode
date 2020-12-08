var assert = require("assert");

function test(firstUniqueChar) {
  assert.strictEqual(firstUniqueChar("helloworld"), 0);
  assert.strictEqual(firstUniqueChar("instagram"), 0);
  assert.strictEqual(firstUniqueChar("a"), 0);
  assert.strictEqual(firstUniqueChar("tenet"), 2);
  assert.strictEqual(firstUniqueChar("anna"), -1);
  assert.strictEqual(firstUniqueChar("aadadaad"), -1);
}

module.exports = test;
