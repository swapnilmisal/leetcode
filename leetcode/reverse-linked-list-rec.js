/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Checkout the LeetCode problem description
 * Recursive solution
 * {@link https://leetcode.com/problems/reverse-linked-list/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {ListNode} node
 * @return {ListNode}
 */
var reverseList = function (node, prev = null) {
  if (!node) return prev;
  let nextNode = node.next;
  node.next = prev;
  return reverseList(nextNode, node);
};
