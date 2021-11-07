/*
 * @lc app=leetcode id=1290 lang=javascript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
var getDecimalValue = function (head) {
  let output = 0;

  const recurse = (node) => {
    if (!node) return 0;
    const returnVal = recurse(node.next);
    output = output + 2 ** returnVal * node.val;
    return returnVal + 1;
  };

  recurse(head);

  return output;
};
*/
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let num = 0;
  do {
    num = (num << 1) | head.val;
		head = head.next;
  } while (head);
  return num;
};
//  code=end
