/*
 * @lc app=leetcode id=836 lang=javascript
 *
 * [836] Rectangle Overlap
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  let [x1, y1, x2, y2] = rec1;
  let [x_1, y_1, x_2, y_2] = rec2;
  // line cannot have positive overlap
  if (x1 === x2 || y1 === y2 || x_1 === x_2 || y_1 === y_2) return false;
  // check if rectangle if not overlapping
  return !(x2 <= x_1 || x1 >= x_2 || y1 >= y_2 || y2 <= y_1);
};
// @lc code=end
