/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const set = new Set();
  for (char of sentence) {
    set.add(char);
  }
  if (set.size < 26) return false;
  return true;
};
