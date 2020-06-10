/*
46. Permutations
Medium

Given a collection of distinct integers, return all possible permutations.

Example:
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

Idea: recursive call to create each permutation
O(n!) < Time < O(n * !n) , Space O(n!)
*/

function permute(nums, set=[], ans=[]) {
    if (!nums.length) {
        ans.push([...set]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        const newNums = nums.filter((n, index) => index !== i);
        set.push(nums[i]);
        permute(newNums, set, ans);
        //remove last element from set after recursive call so that new number can be added
        set.pop();
    }
    return ans;
}
