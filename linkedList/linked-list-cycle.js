/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/linked-list-cycle/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {ListNode} node
 * @return {boolean} Do not return anything, modify node in-place instead.
 */
var hasCycle = function (head) {
  let node = head;
  while (node) {
    if (node.val === 1000000) return true;
    node.val = 1000000;
    node = node.next;
  }
  return false;
};
