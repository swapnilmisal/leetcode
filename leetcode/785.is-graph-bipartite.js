/*
 * @lc app=leetcode id=785 lang=javascript
 *
 * [785] Is Graph Bipartite?
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const map = new Map();
  const dfs = (node, color) => {
    if (map.has(node)) return color === map.get(node);
    else map.set(node, color);
    const nodes = graph[node];
    for (let i = 0; i < nodes.length; i++)
      if (!dfs(nodes[i], !color)) return false;
    return true;
  };
  for (let i = 0; i < graph.length; i++)
    if (!map.has(i) && !dfs(i, false)) return false;
  return true;
};
// @lc code=end
