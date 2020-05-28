/*
15. 3Sum
Medium

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

Idea:
2 pointer sliding window with 3rd point held constant
Time: O(n**2) Space: O(logn) (due to the sorting algo);
*/

function threeSum(nums) {
    const result = [];

    //sliding window requires sorted array
    nums.sort((a,b) => a-b);

    for (let i = 0; i < nums.length; i++) {
        //continue if we've seen the previous i val before
        if (i === 0 || nums[i] !== nums[i-1]) {
            slidingWindow(nums, i, result);
        }
    }
    return result;
}

function slidingWindow(nums, i, res) {
    let L = i + 1;
    let R = nums.length - 1;

    while (L < R) {
        let sum = nums[L] + nums[R] + nums[i];
        
        //the we've already seen L val or R val;
        if (sum < 0 || (L > i + 1 && nums[L] === nums[L-1])) {
            L += 1;
        } else if (sum > 0 || (R < nums.length - 1 && nums[R] === nums[R+1])) {
            R -= 1;
        } else {
            res.push([nums[i], nums[L], nums[R]]);
            //move L and R after a solution is found
            L += 1;
            R -= 1;
        }
    }
}

const test = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(test));
