/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
  const diffCount = getLength(headA) - getLength(headB);
  let [bigHead, smallHead] = diffCount >= 0 ? [headA, headB] : [headB, headA];
  let node = getNthNode(bigHead, Math.abs(diffCount));
  while (node && node !== smallHead) {
    smallHead = smallHead.next;
    node = node.next;
  }
  return node;
};

var getLength = (head) => {
  let count = 0;
  while (head) {
    count++;
    head = head.next;
  }
  return count;
};
var getNthNode = (head, count = 0) => {
  while (count) {
    count--;
    head = head.next;
  }
  return head;
};

// @lc code=end
