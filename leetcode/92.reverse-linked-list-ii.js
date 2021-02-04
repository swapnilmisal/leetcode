/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  const recurse = (node, count) => {
    if (count === n) return node;
    const returnedNode = recurse(node.next, count + 1);
    if (count >= m) {
      const temp = node.next;
      node.next = node.next.next;
      temp.next = node;
    }
    if (count === m - 1) node.next = returnedNode;
    if (count < m) return node;
    return returnedNode;
  };
  return recurse(head, 1);
};
// @lc code=end
