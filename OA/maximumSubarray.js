/*
53. Maximum Subarray
Easy

7530

350

Add to List

Share
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Idea: Kaden's Algorithm
Time O(N) Space O(1)
*/

function maximumSubarray(nums) {
    let globalMax = -Infinity;
    let startHere = 0;
    
    for (let i = 0; i < nums.length; i++) {
        //if the past values don't contribute, consider starting the new count 
        //from the currunt element
        startHere = Math.max(startHere + nums[i], nums[i]);
        globalMax = Math.max(globalMax, startHere);
    }
    return globalMax;
}


