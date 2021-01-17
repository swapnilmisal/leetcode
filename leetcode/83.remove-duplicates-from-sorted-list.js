/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @return {ListNode}
 */
var deleteDuplicates = function (node, val) {
    if (!node) return node;
    const returnedNode = deleteDuplicates(node.next, node.val);
    if (node.val === val) return returnedNode;
    node.next = returnedNode;
    return node;
  };
// @lc code=end
