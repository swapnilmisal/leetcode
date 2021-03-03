/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let index = postorder.length - 1;
  const searchArray = (b, e) => {
    for (let i = e; i >= b; i--)
      if (inorder[i] === postorder[index]) {
        index--;
        return i;
      }
    return null;
  };

  const recurse = (b, e) => {
    let leftNode = null;
    let rightNode = null;
    let rootIndex = searchArray(b, e);
    if (b < e && rootIndex !== null) {
      rightNode = recurse(rootIndex + 1, e);
      leftNode = recurse(b, rootIndex - 1);
    } else if (rootIndex === null) return null;
    return new TreeNode(inorder[rootIndex], leftNode, rightNode);
  };

  return recurse(0, postorder.length - 1);
};
// @lc code=end
