var assert = require("assert");

function test(generatePascalsTriangle) {
  const resultArray = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

  assert.deepStrictEqual(generatePascalsTriangle(1), resultArray.slice(0, 1));
  assert.deepStrictEqual(generatePascalsTriangle(2), resultArray.slice(0, 2));
  assert.deepStrictEqual(generatePascalsTriangle(3), resultArray.slice(0, 3));
  assert.deepStrictEqual(generatePascalsTriangle(5), resultArray);
}

module.exports = test;
