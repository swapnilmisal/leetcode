/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 && l2) return l2;
  if (!l2 && l1) return l1;
  if (!l1 && !l2) return null;
  let [itr, other] = l1.val < l2.val ? [l1, l2] : [l2, l1];
  let link = itr;

  while (itr.next) {
    if (itr.next.val > other.val) {
      let temp = itr.next;
      itr.next = other;
      other = temp;
    } else {
      itr = itr.next;
    }
  }

  itr.next = other;
  return link;
};
