/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
var oddEvenList = function (head) {
  if (!head) return head;
  let even = null;
  let iterator = head;
  let prev = null;
  let evenIterator = null;

  while (iterator?.next) {
    let evenTemp = iterator.next;
    iterator.next = iterator.next.next;
    prev = iterator;
    iterator = iterator.next;
    evenTemp.next = null;
    if (!even) {
      even = evenTemp;
      evenIterator = even;
    } else if (evenIterator) {
      evenIterator.next = evenTemp;
      evenIterator = evenIterator.next;
    }
  }
  if (iterator) {
    iterator.next = even;
  } else if (prev) {
    prev.next = even;
  }
  return head;
};
// @lc code=end
