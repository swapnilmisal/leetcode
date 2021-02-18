/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
class Heap extends Array {
  // max heap
  constructor() {
    super();
  }
  insertHeap(x) {
    this.push(x);
    this.adjustBottomUp(this.length - 1);
  }
  popHeap() {
    const max = this[0];
    const poppedElement = this.pop();
    if (this.length === 0) return max;
    this[0] = poppedElement;
    this.adjustTopDown(0);
    return max;
  }
  adjustBottomUp(index) {
    const parentIndex = Math.ceil(index / 2) - 1;
    if (parentIndex >= 0 && this[parentIndex] < this[index]) {
      this.swap(parentIndex, index);
      this.adjustBottomUp(parentIndex);
    }
    return;
  }
  adjustTopDown(index) {
    if (index === this.length - 1) return;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    const leftChildValue = this?.[leftChild] ?? -Infinity;
    const rightChildValue = this?.[rightChild] ?? -Infinity;
    const bigChild = leftChildValue >= rightChildValue ? leftChild : rightChild;
    if (bigChild <= this.length - 1 && this[bigChild] > this[index]) {
      this.swap(bigChild, index);
      this.adjustTopDown(bigChild);
    }
    return;
  }
  swap(a, b) {
    const temp = this[a];
    this[a] = this[b];
    this[b] = temp;
  }
}
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const heap = new Heap();
  stones.forEach((stone) => heap.insertHeap(stone));
  while (heap.length > 1) {
    const first = heap.popHeap();
    const second = heap.popHeap();
    const diff = Math.abs(first - second);
    if (diff) heap.insertHeap(diff);
  }
  if (heap.length === 1) return heap.popHeap();
  return 0;
};
// @lc code=end