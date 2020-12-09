var assert = require("assert");

function test(longestCommonPrefix) {
  assert.strictEqual(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
  assert.strictEqual(
    longestCommonPrefix(["abcdef", "abcdef", "abcdef"]),
    "abcdef"
  );
  assert.strictEqual(longestCommonPrefix(["", "", ""]), "");
  assert.strictEqual(longestCommonPrefix(["dog", "racecar", "car"]), "");
  assert.strictEqual(longestCommonPrefix(["dog"]), "dog");
  assert.strictEqual(longestCommonPrefix([]), "");
}

module.exports = test;
