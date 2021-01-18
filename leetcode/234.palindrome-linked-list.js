/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let itr = head;
  let count = 0;
  let node = head;
  while (itr) {
    count++;
    itr = itr.next;
  }
  const limit = ~~(count / 2);
  const isOdd = Boolean(count % 2);
  const [returnedNode, isPal] = recurse(node, limit, 0, isOdd);
  return isPal;
};

var recurse = function (node, limit, depth, isOdd) {
  if (limit <= depth)
    if (isOdd) return [node?.next, true];
    else return [node, true];
  const [returnedNode, isPal] = recurse(node.next, limit, ++depth, isOdd);
  if (!isPal) return [null, false];
  if (node.val === returnedNode.val) return [returnedNode.next, true];
  else return [null, false];
};
// @lc code=end
