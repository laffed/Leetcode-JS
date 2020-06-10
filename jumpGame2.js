/*
45. Jump Game II
Hard

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:
Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.

Note:
You can assume that you can always reach the last index.
*/
//Greedy Time O(n) Space O(1)

function jumpGame2(nums) {
    if (nums.length < 2) return 0;

    let maxIndx = nums[0]
    let maxSteps = nums[0];
    let jumps = 1;

    for (let i = 0; i < nums.length; i++) {
        if (maxSteps < i) {
            jumps += 1;
            maxSteps = maxIndx;
        }
        maxIndx = Math.max(maxIndx, nums[i] + i);
    }
    return jumps;
}

const test = [2,3,1,1,4];
console.log(jumpGame2(test));

/*
 i      steps       jumps       maxIndx
 0      2           1           2
 1      2           1           4
 2      2           1           4
 3      4           2           4
 4      4           2           8
 */
