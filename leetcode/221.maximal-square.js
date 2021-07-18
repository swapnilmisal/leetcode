/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const memo = matrix.map((row) => row.slice());
  /*
		We do not need to use 2D memo because this can also be achieved in 1D memo.
	*/

  const rows = memo.length;
  const cols = memo[0].length;
  let max = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == "1") {
        memo[i][j] = 1;
        if (j - 1 >= 0 && i - 1 >= 0) {
          memo[i][j] += Math.min(
            memo[i][j - 1],
            memo[i - 1][j],
            memo[i - 1][j - 1]
          );
        }
        max = Math.max(max, memo[i][j]);
      }
    }
  }
  return max ** 2;
};
