/*
5. Longest Palindromic Substring
Medium

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"
*/

//Credit: bobwei
//Consider every point as center of palindrom: O(N**2) Time
function longestPalindrome(s) {
    let max = '';
    if (!s || !s.length) return '';

    //loop s and consider every index as center
    for (let i = 0; i < s.length; i++) {
        const [start, end] = helper(s, i);
        if (end - start + 1 > max.length) {
            max = s.substring(start, end + 1);
        }
    }
    return max;
}

function helper(str, cent) {
    let L = cent;
    let R = cent;

    //consider if palindrome center is based on even sized center (center w/ two nums)
    while (str[L] === str[R+1]) {
        R += 1;
    }

    while (str[L-1] === str[R+1] && L >= 0 && R < str.length) {
        L -= 1;
        R += 1;
    }

    return [L, R];
}


