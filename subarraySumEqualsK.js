/*
560. Subarray Sum Equals K

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/

function subarraySumEqualsK(nums, k) {
    const sumDict = {
        0: 1
    }
    let count = 0;
    //cumulative sum
    let s = 0;

    for (let i = 0; i < nums.length; i++) {
        s += nums[i];
        if (sumDict.hasOwnProperty(s-k)) {
            count += sumDict[s-k];
        }
        sumDict[s] = sumDict[s] + 1 || 1;
    }
    return count;
}

console.log(subarraySumEqualsK([3,4,7,2,-3,1,4,2,1],7))
//expected 6
