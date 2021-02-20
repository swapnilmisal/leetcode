/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
const sortList = (headA = null, headB = null) => {
  if (!headA) return [headB, headA];
  if (!headB) return [headA, headB];
  let [head, end] = [null, null];
  if (headA.val < headB.val) {
    headA.next = headB;
    headB.next = null;
    head = headA;
    end = headB;
  } else {
    headB.next = headA;
    headA.next = null;
    head = headB;
    end = headA;
  }
  return [head, end];
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0 || (lists.length === 1 && lists[0].length === 0))
    return null;
  if (lists.length === 1) return lists[0];
  let leftRoot = mergeKLists(lists.slice(0, Math.floor(lists.length / 2)));
  let rightRoot = mergeKLists(lists.slice(Math.ceil(lists.length / 2)));
  let head = null;
  let varEnd = null;
  while (leftRoot || rightRoot) {
    let leftNext = leftRoot?.next ?? null;
    let rightNext = rightRoot?.next ?? null;
    const [returnedHead, returnedEnd] = sortList(leftRoot, rightRoot, varEnd);
    if (!head) head = returnedHead;
    if (!varEnd) varEnd = returnedEnd;
    else varEnd.next = returnedHead;
    varEnd = returnedEnd;

    leftRoot = leftNext;
    rightRoot = rightNext;
  }
  return head;
};
// @lc code=end
