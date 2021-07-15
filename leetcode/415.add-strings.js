/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  const aascii = 48;
  let sumArray = [];

  while (i >= 0 || j >= 0 || carry) {
    let first = num1.charCodeAt(i) % aascii;
    let second = num2.charCodeAt(j) % aascii;
    first = isNaN(first) ? 0 : first;
    second = isNaN(second) ? 0 : second;
    let sum = first + second + carry;
    carry = sum >= 10;
    sum %= 10;
    sumArray.push(sum + aascii);
    i--, j--;
  }
  return String.fromCharCode(...sumArray.reverse());
};
