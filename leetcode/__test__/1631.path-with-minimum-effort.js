/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const memo = Array.from(Array(rows), (_) => Array(cols).fill(Infinity));
  //memo[0][0] = 0;

  const recurse = (i, j, dir, dirValInHeights) => {
    // Edge case
    if (i < 0 || j < 0 || i >= rows || j >= cols) return;

    const currDiff = Math.abs(heights[i][j] - dirValInHeights);
    const curr = memo[i][j];
    const optimizedValue = Math.min(curr, Math.max(currDiff, dir));
    if (optimizedValue >= curr) return;
    memo[i][j] = optimizedValue;

    const currentHeightValue = heights[i][j];
    const currentMemoValue = memo[i][j];

    recurse(i - 1, j, currentMemoValue, currentHeightValue);
    recurse(i, j + 1, currentMemoValue, currentHeightValue);
    recurse(i + 1, j, currentMemoValue, currentHeightValue);
    recurse(i, j - 1, currentMemoValue, currentHeightValue);
  };

  recurse(0, 0, 0, heights[0][0]);
  return memo[rows - 1][cols - 1];
};
