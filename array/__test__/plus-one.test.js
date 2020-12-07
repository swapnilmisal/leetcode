var assert = require("assert");

function test(plusOne) {
  const resultArray = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

  assert.deepStrictEqual(plusOne([1, 2, 3]), [1, 2, 4]);
  assert.deepStrictEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
  assert.deepStrictEqual(plusOne([0]), [1]);
  assert.deepStrictEqual(plusOne([9]), [1, 0]);
  assert.deepStrictEqual(plusOne([9, 9]), [1, 0, 0]);
  assert.deepStrictEqual(plusOne([9, 8]), [9, 9]);
  assert.deepStrictEqual(plusOne([8, 9]), [9, 0]);
}

module.exports = test;
