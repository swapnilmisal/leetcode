var assert = require("assert");

function test(twoSum) {
  const resultArray = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

  assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assert.deepStrictEqual(twoSum([3, 2, 4], 6), [1, 2]);
  assert.deepStrictEqual(twoSum([3, 3], 6), [0, 1]);
}

module.exports = test;
