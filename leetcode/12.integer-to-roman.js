/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);
  let output = "";
  let value = num;
  for (const [int, roman] of map) {
    if (int <= value) {
      const tempValue = value % int;
      const repeat = Math.floor(value / int);
      value = tempValue;
      output += roman.repeat(repeat);
    }
  }
  return output;
};
