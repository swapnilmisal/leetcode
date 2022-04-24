/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const isValid = (str) => {
        if (str[0] == 0) return false
        return (str > 0) && (str < 27)
    };

    const memo = [0, 1];
    memo[0] = isValid(s[s.length - 1]) ? 1 : 0;

    for (let i = s.length - 2; i >= 0; i--) {
        const isSingleValid = Boolean(isValid(s[i]) && memo[0]);
        const isDoubleValid = Boolean(isValid(s.slice(i, i + 2)) && memo[1])
        let x = 0;
        if (isSingleValid && isDoubleValid) x = memo[0] + memo[1];
        else if (isSingleValid) x = memo[0];
        else if (isDoubleValid) x = memo[1];

        memo[1] = memo[0];
        memo[0] = x;
    }

    return memo[0]


};

import { getRandomArray } from "../utils/testGenerator.mjs";
console.log(JSON.stringify(getRandomArray(0, 9, 20).join("")));