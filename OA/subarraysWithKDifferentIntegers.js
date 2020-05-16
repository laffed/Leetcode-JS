/*
992. Subarrays with K Different Integers
Hard

Given an array A of positive integers, call a (contiguous, not necessarily distinct) subarray of A good if the number of different integers in that subarray is exactly K.

(For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.)

Return the number of good subarrays of A.

Example 1:
Input: A = [1,2,1,2,3], K = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].

Example 2:
Input: A = [1,2,1,3,4], K = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
*/

/*
 * Brute force O(N**) O(N)
 * -two pointers
 * -create set
 * -move right pointer until dist = K
 * -update result counter
 * -continue moving right pointer until dist != K
 * -move left pointer over and restart until left pointer is A.length - 1
*/

function subarraysWithKDistinct(A, K) {
    let result = 0;
    let L = 0;
    let R = L;

    while (L < A.length) {
        let set = new Set();
        while (set.size < K && R < A.length) {
            set.add(A[R]);
            if (set.size === K) {
                result += 1;
            }
            R += 1;
        }
        while (set.size === K && R < A.length) {
            set.add(A[R]);
            if (set.size === K) {
                result += 1;
                R += 1;
            } else {
                break;
            }
        }
        L += 1;
        R = L;
    }
    return result;
}
