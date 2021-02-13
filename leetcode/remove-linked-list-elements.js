/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/remove-linked-list-elements/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let p = null,
    c = head;
  while (c) {
    if (c.val === val)
      if (p) p.next = c.next;
      else head = c.next;
    else p = c;
    c = c.next;
  }
  return head;
};
