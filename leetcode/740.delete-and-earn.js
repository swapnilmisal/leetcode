/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const map = new Map();
  nums.forEach((num) => {
    const value = map.get(num) ? map.get(num) + num : num;
    map.set(num, value);
  });
  const array = [];
  const iterator = map[Symbol.iterator]();
  for (const inst of iterator) {
    array.push(inst);
  }

  const numsMerged = array.sort((a, b) => a[0] - b[0]);
  const memo = [0, 0];
  let maximum = 0;
  let sum = 0;

  for (let i = 0; i < numsMerged.length; i++) {
    if (numsMerged[i - 1] && numsMerged[i - 1][0] === numsMerged[i][0] - 1) {
      sum = Math.max(memo[1] + numsMerged[i][1], memo[0]);
    } else {
      sum = memo[0] + numsMerged[i][1];
    }
    memo[1] = memo[0];
    memo[0] = sum;
    maximum = maximum > sum ? maximum : sum;
  }
  return maximum;
};
