/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const output = [];
    const comb = [];

    const recurse = (target, index) => {
        
        if(target === 0 ){
            output.push([...comb]);
            return;
        } else if(target < 0){
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            comb.push(candidates[i]);
            recurse(target-candidates[i], i);
            comb.pop();
        }
    }
    recurse(target, 0)
    
    return output;
};
// @lc code=end

