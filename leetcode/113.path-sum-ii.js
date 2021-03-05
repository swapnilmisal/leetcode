/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum, soln = [], right = false) {
  const res = [];
  const pathSumRec = (node, targetSum, soln = []) => {
    if (!node) return;
    soln.push(node.val);
    if (targetSum - node.val === 0)
      if (!node.left && !node.right) res.push([...soln]);
    pathSumRec(node.left, targetSum - node.val, soln);
    pathSumRec(node.right, targetSum - node.val, soln);
    soln.pop();
  };
  pathSumRec(root, targetSum);
  return res;

  /* 
single function soln
  if (!root) {
    if (!targetSum && right) return [[...soln]];
    else return [];
  }
  soln.push(root.val);
  const leftSoln = pathSum(root.left, targetSum - root.val, soln, false);
  const rightSoln = pathSum(root.right, targetSum - root.val, soln, true);
  const combinedSoln = [...leftSoln, ...rightSoln];
  soln.pop();
  return combinedSoln;

 */
};
// @lc code=end
