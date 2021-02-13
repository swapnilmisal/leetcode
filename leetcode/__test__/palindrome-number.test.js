var assert = require("assert");

function test(func) {
  assert.strictEqual(func(121), true);
  assert.strictEqual(func(324), false);
  assert.strictEqual(func(6), true);
  assert.strictEqual(func(-1), false);
  assert.strictEqual(func(-10), false);
}

var isPalindrome = require("../palindrome-number");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(isPalindrome);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
