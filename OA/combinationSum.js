/*
39. Combination Sum
Medium

3584

110

Add to List

Share
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/

function combinationSum(candidates, target) {
    const result = [];
    const path = [];
    candidates.sort((a,b) => a-b);
    dfs(candidates, target, 0, result, path);
    return result;
}

function dfs(candidates, target, idx, result, path) {
    if (target === 0) {
        result.push([...path]);
        return;
    }

    for (let i = idx; i < candidates.length; i++) {
        path.push(candidates[i]);
        dfs(candidates, target - candidates[i], i, result, path);
        path.pop();
    }
}
