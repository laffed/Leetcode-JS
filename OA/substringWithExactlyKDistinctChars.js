/*
Given a string s and an int k, return an int representing the number of substrings (not unique) of s with exactly k distinct characters. If the given string doesn't have k distinct characters, return 0.
https://leetcode.com/problems/subarrays-with-k-different-integers

Example 1:

Input: s = "pqpqs", k = 2
Output: 7
Explanation: ["pq", "pqp", "pqpq", "qp", "qpq", "pq", "qs"]
Example 2:

Input: s = "aabab", k = 3
Output: 0
Constraints:

The input string consists of only lowercase English letters [a-z]
0 ≤ k ≤ 26
*/


//similar to number of substrings with up to k chars (ie moving window approach)
//but relies on the fact that Exact (K) = At Most (k) - At Most (k-1)

function atMost(s, k) {
    const distinctChars = {};
    let left = 0;
    let right = 0;
    let numDistinct = 0;
    let numPermutations = 0; 

    for ( ; right < s.length; right++) {
        if (!distinctChars[s[right]]) {
            numDistinct += 1;
        }
        distinctChars[s[right]] = distinctChars[s[right]] + 1 || 1;

        while (numDistinct > k) {
            if (distinctChars[s[left]] === 1) {
                numDistinct -= 1;
            }
            distinctChars[s[left]] -= 1;
            left += 1;
        }
        numPermutations += right - left + 1;
    }
    return numPermutations;
}

function substringWithExactlyKDistinctChars(s, k) {
    return atMost(s, k) - atMost(s, k-1);
}

const input = "pqpqs";
const k = 2;

console.log(substringWithExactlyKDistinctChars(input, k));
