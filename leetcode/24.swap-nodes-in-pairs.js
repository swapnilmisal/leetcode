/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function (head) {
  let itr = head;

  while (itr) {
    let nextNode = itr.next;
    if (!nextNode) break;
    let tempVal = nextNode.val;
    nextNode.val = itr.val;
    itr.val = tempVal;
    itr = nextNode.next;
  }
  return head;
};
// @lc code=end
