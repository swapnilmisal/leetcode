var assert = require("assert");

function test(searchInsert) {
  assert(searchInsert([1], 0) === 0);
  assert(searchInsert([1], 1) === 0);
  assert(searchInsert([1], 5) === 1);
  assert(searchInsert([1, 5, 9], 1) === 0);
  assert(searchInsert([1, 5, 9], 5) === 1);
  assert(searchInsert([1, 5, 9], 9) === 2);
  assert(searchInsert([1, 5, 9], 0) === 0);
  assert(searchInsert([1, 5, 9], 2) === 1);
  assert(searchInsert([1, 5, 9], 6) === 2);
  assert(searchInsert([1, 5, 9], 10) === 3);

  assert(searchInsert([1, 5, 9, 20], 1) === 0);
  assert(searchInsert([1, 5, 9, 20], 5) === 1);
  assert(searchInsert([1, 5, 9, 20], 9) === 2);
  assert(searchInsert([1, 5, 9, 20], 0) === 0);
  assert(searchInsert([1, 5, 9, 20], 2) === 1);
  assert(searchInsert([1, 5, 9, 20], 6) === 2);
  assert(searchInsert([1, 5, 9, 20], 10) === 3);
  assert(searchInsert([1, 5, 9, 20], 20) === 3);
  assert(searchInsert([1, 5, 9, 20], 21) === 4);
}

module.exports = test;
