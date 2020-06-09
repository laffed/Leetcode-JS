/*
300. Longest Increasing Subsequence
Medium

4437

104

Add to List

Share
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/

//First Method:
//Dynamic programming
//Time O(n**2) Space O(n)

function lengthOfLIS(nums) {
    let max = 0;
    //dp array
    const length = [];

    for (let k = 0; k < nums.length; k++) {
        length[k] = 1;
        for (let i = 0; i < k; i++) {
            if (nums[i] < nums[k]) {
                length[k] = Math.max(length[k], length[i] + 1);
            }
            max = Math.max(max, length[k]);
        }
    }
    return nums.length === 1 ? 1 : max;
}

//Second Method:
//DP with binary search
//Time O(nlogn) Space O(n)

function lengthOfLIS2(nums) {

}
