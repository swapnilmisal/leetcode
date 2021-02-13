/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/pascals-triangle/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const array = [];
  for (let i = 1; i <= numRows; i++) {
    let arr = [];
    for (let j = 0; j <= ~~(i / 2); j++) {
      arr[j] = arr[i - 1 - j] = array[i - 2]
        ? (array[i - 2][j] || 0) + (array[i - 2][j - 1] || 0)
        : 1;
    }
    array[i - 1] = arr;
  }
  return array;
};

var test = require("./__test__/pascal's-triangle.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(generate);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
