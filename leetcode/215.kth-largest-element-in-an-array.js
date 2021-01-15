/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  if (k > nums.length) return -1;
  const heap = [];
  nums.forEach((value, index) => {
    heap[index] = value;
    heapAdjust(heap, index);
  });
  for (let index = 0; index < k - 1; index++) {
    const element = heap.pop();
    heap[0] = element;
    heapAdjustBubbleDown(heap);
  }
  return heap[0];
};

var heapAdjust = (heap, index) => {
  if (index === 0) return;
  let rootIndex = Math.ceil(index / 2) - 1;
  if (heap[rootIndex] < heap[index]) {
    temp = heap[rootIndex];
    heap[rootIndex] = heap[index];
    heap[index] = temp;
    heapAdjust(heap, rootIndex);
  }
};

var heapAdjustBubbleDown = (heap, rootIndex = 0) => {
  const leftChildIndex = rootIndex * 2 + 1;
  const rightChildIndex = rootIndex * 2 + 2;
  if (
    (heap[leftChildIndex] === undefined &&
      heap[rightChildIndex] === undefined) ||
    (heap[rootIndex] >= heap[leftChildIndex] &&
      heap[rootIndex] >= heap[rightChildIndex]) ||
    (heap[rightChildIndex] === undefined &&
      heap[rootIndex] >= heap[leftChildIndex]) ||
    (heap[leftChildIndex] === undefined &&
      heap[rootIndex] >= heap[rightChildIndex])
  )
    return;
  let moveIndex = leftChildIndex;
  if (heap[rightChildIndex] > heap[leftChildIndex]) moveIndex = rightChildIndex;
  temp = heap[rootIndex];
  heap[rootIndex] = heap[moveIndex];
  heap[moveIndex] = temp;
  heapAdjustBubbleDown(heap, moveIndex);
};
// @lc code=end
