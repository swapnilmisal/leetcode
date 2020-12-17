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
  let slow = head && head.next;
  let fast = slow && slow.next;
  while (slow && fast) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }
  return false;
};
