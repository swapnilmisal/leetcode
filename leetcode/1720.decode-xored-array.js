/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  return encoded.reduce(
    (acc, curr) => {
      acc.push(acc[acc.length - 1] ^ curr);
      return acc;
    },
    [first]
  );
};
