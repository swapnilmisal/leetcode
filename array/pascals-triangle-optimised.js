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
  var arr = [];
  for (let i = 0; i <= (numRows / 2) << 0; i++)
    arr[i] = arr[numRows - 1 - i] = (array[i] || 0) + (array[i - 1] || 0);
  return arr;
};

var test = require("./__test__/pascal's-triangle.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(generate);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
