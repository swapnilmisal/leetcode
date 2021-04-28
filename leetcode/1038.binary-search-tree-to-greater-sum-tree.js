/*
 * @lc app=leetcode id=1038 lang=javascript
 *
 * [1038] Binary Search Tree to Greater Sum Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  // Morris Post Order traversal

  const inOrderSuccessor = (node) => {
    let id = node.val;
    let prevNode = node;
    let temp = node.right;
    while (temp && id !== temp.val) {
      prevNode = temp;
      temp = temp.left;
    }
    if (!temp) return prevNode;
    prevNode.left = null;
    return node;
  };

  let node = root;
  let sum = 0;

  const work = (node) => {
    sum += node.val;
    node.val = sum;
  };

  while (node) {
    if (!node.right) {
      work(node);
      node = node.left;
    } else {
      let successor = inOrderSuccessor(node);
      if (node.val === successor.val) {
        work(node);
        node = node.left;
      } else {
        successor.left = node;
        node = node.right;
      }
    }
  }
  return root;
};
// @lc code=end
