/*
340. Longest Substring with At Most K Distinct Characters

Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:
Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.

Example 2:
Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
*/

function lengthOfLongestSubstringKDistinct(s, k) {
    //sliding window technique
    const distinctChars = {};
    let max = 0; 
    let l = 0;
    let r = 0; 
    let numDistinct = 0;

    if (!s || !s.length) return 0;
    
    //keep extending the right pointer
    for ( ; r < s.length; r++) {
        //if we haven't seen the curr char, increment distinct count
        if (!distinctChars[s[r]]) {
            distinct += 1;
        }
        distinctChars[s[r]] = distinctChars[s[r]] + 1 || 1;

        //if the distinct count exceeds k, increment left pointer until it does not
        while (numDistinct > k) {
            //if the left pointer char is the last of its kind, decrement distinct count
            if (distinctChars[s[l]] === 1) {
                numDistinct -= 1;
            }
            distinctChars[s[l]] -= 1;
            l += 1;
        }
        max = Math.max(max, r - l + 1);
    }
    return max;
}
