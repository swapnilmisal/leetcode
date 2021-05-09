/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let pointer = head;
  const recurse = (node) => {
    if (!node) return;
    recurse(node.next);
    if (pointer.next && pointer.next.next) node.next = null;
    if (pointer.next && pointer.next.next) {
      const next = pointer.next;
      node.next = next;
      pointer.next = node;
      pointer = next;
    }
  };
  recurse(head);
};
// @lc code=end
