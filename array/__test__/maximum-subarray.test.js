var assert = require("assert");

function test(maxSubArray) {
  assert(maxSubArray([8, -19, 5, -4, 20]) === 21);
  assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
  assert(maxSubArray([1]) === 1);
  assert(maxSubArray([0]) === 0);
  assert(maxSubArray([-1]) === -1);
  assert(maxSubArray([-2147483647]) === -2147483647);
}

module.exports = test;
