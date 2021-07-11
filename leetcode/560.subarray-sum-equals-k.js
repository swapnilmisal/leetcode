/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map([[0, 1]]);
  let sum = 0,
    count = 0;

  const func = (num) => {
    sum += num;
    const intermediateSum = sum - k;
    if (map.has(intermediateSum)) count += map.get(intermediateSum);
    const sumOccCount = (map.get(sum) || 0) + 1;
    map.set(sum, sumOccCount);
  };

  nums.forEach(func);
  return count;
};
