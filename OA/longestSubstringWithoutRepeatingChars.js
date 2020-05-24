/*
3. Longest Substring Without Repeating Characters
Medium

8845

536

Add to List

Share
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
//O(n) O(n)

function lengthOfLongestSubstring(s) {
    if (!s || !s.length) return 0;

    const dict = {};
    let l = 0;
    let r = 0;
    let max = 0;

    for ( ; r < s.length; r++) {
        dict[s[r]] = dict[s[r]] + 1 || 1;

        while (dict[s[r]] > 1 && l <= r) {
            dict[s[l]] -= 1;
            l += 1;
        }

        max = Math.max(max, r - l + 1);
    }

    return max;
}
