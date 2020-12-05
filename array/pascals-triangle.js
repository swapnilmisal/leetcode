/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/pascals-triangle/ LeetCode}.
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let array = [];
  for (let i = 1; i <= numRows; i++) array[i - 1] = getArray(i, array[i - 2]);
  return array;
};

var getArray = function (numRows, array = []) {
  if (numRows === 1) return [1];
  else if (numRows === 2) {
    return [1, 1];
  } else {
    var arr = [];
    for (let i = 0; i < numRows; i++)
      arr[i] = (array[i] || 0) + (array[i - 1] || 0);
    return arr;
  }
};

var test = require("./__test__/pascal's-triangle.test");
console.log("testing Pascal's Triangle");
console.time("start");
test(generate);
console.timeEnd("start");
console.log("passed test for testing Pascal's Triangle");
