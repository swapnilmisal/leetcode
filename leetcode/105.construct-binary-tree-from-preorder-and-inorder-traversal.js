/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let index = 0;
  const searchArray = (b, e) => {
    for (let i = b; i <= e; i++)
      if (inorder[i] === preorder[index]) {
        index++;
        return i;
      }
    return null;
  };

  const recurse = (b, e) => {
    let leftNode = null;
    let rightNode = null;
    let rootIndex = searchArray(b, e);
    if (b < e && rootIndex !== null) {
      leftNode = recurse(b, rootIndex - 1);
      rightNode = recurse(rootIndex + 1, e);
    } else if (rootIndex === null) return null;
    return new TreeNode(inorder[rootIndex], leftNode, rightNode);
  };

  return recurse(0, preorder.length - 1);
};
// @lc code=end
