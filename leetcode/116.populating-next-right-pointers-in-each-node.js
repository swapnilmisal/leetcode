/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  connect(root.left);
  connect(root.right);
  let travelLeft = root.left;
  let travelRight = root.right;
  while (travelLeft) {
    travelLeft.next = travelRight;
    travelLeft = travelLeft.right;
    travelRight = travelRight.left;
  }
  return root;
};
// @lc code=end
