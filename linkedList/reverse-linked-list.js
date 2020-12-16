/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/reverse-linked-list/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let itr = head;
  let prev = null;
  while (itr) {
    next = itr.next;
    itr.next = prev;
    prev = itr;
    itr = next;
  }
  return prev;
};
