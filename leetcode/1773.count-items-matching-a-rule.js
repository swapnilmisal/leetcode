/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const dict = {
    type: 0,
    color: 1,
    name: 2,
  };

  let count = 0;
  for (const item of items) if (item[dict[ruleKey]] === ruleValue) count++;
  return count;
};
