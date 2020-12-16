/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/delete-node-in-a-linked-list/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let ref = node.next;
  node.val = node.next.val;
  node.next = node.next.next;
  delete ref;
};
