var recurse = function (nums, target, s, e) {
  if (e - s <= 1) {
    if (nums[s] === target) return s;
    if (nums[e] === target) return e;
    return -1;
    // Do something
  } // only two elements left in the array

  const pivote = ~~((s + e) / 2);
  if (nums[s] > nums[e]) {
    let left = recurse(nums, target, s, pivote);
    if (left !== -1) return left;
    let right = recurse(nums, target, pivote + 1, e);
    return right;
  } else {
    if (target < nums[s] || target > nums[e]) return -1;
    if (target === nums[pivote]) return pivote;
    if (target < nums[pivote]) return recurse(nums, target, s, pivote);
    return recurse(nums, target, pivote + 1, e);
  }
};

/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/search-in-rotated-sorted-array/ LeetCode}.
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return recurse(nums, target, 0, nums.length - 1);
};

var test = require("./__test__/search-in-rotated-sorted-array.test");
console.log("testing 33. Search in Rotated Sorted Array");
console.time("start");
test(search);
console.timeEnd("start");
console.log("passed test for  33. Search in Rotated Sorted Array");
