/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pos = 0;
  const recurse = (node) => {
    if (!node) return node;
    node.next = recurse(node.next);
    pos++;
    if (pos !== n) return node;
    return node.next;
  };
  return recurse(head);
};
// @lc code=end
