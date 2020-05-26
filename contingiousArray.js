/*
525. Contiguous Array
Medium

1970

112

Add to List

Share
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.
*/
/*
Concept:
For every index keep track of the current count and current index.
Decrement count for 0, increment for 1.
When we see the same count, the length between the index with the same 
count will be a valid result. Take the maximum of all valid results. 
O(n) O(n)
*/

function findMaxLength(nums) {
    const dict {
        0: -1
    }
    let count = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count += 1;
        } else if (nums[i] === 0) {
            count -= 1;
        }

        if (!dict.hasOwnProperty(count)) {
            dict[count] = i;
        } else {
            let currValid = i - dict[count];
            max = Math.max(max, currValid);
        }
    }
    return max;
}
