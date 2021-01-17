/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let [leftList, rightList] = sol(head, x);
  if (!rightList) return leftList;
  let prevNode = null;
  let itr = leftList;
  while (itr) {
    prevNode = itr;
    itr = itr.next;
  }
  if (!prevNode) return rightList;
  prevNode.next = rightList;
  return leftList;
};

var sol = function (node, x) {
  if (!node) return [null, null];
  let [leftList, rightList] = sol(node.next, x);
  if (node.val >= x) {
    node.next = rightList;
    return [leftList, node];
  } else {
    node.next = leftList;
    return [node, rightList];
  }
};
// @lc code=end
