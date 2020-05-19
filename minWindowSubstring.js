/*
76. Minimum Window Substring
Hard

4065

282

Add to List

Share
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

Time: O(S + T) Space: O(S + T)
*/

function minWindow(s, t) {
    const map = {};
    for (let x of t) {
        map[x] = map[x] + 1 || 1;
    }
    let count = Object.keys(map).length;

    let ans = '';
    let l = 0;
    let r = -1;

    while (r < s.length) {
        if (count === 0) {
            if (!ans || r - l + 1 < ans.length) {
                ans = s.slice(l, r+1);
            }
            if (map[s[l]] !== undefined) {
                map[s[l]] += 1;
            }
            if (map[s[l]] > 0) {
                count += 1
            }
            l += 1;
        } else {
            r += 1;
            if (map[s[r]] !== undefined) {
                map[s[r]] -= 1;
            }
            if (map[s[r]] === 0) {
                count -= 1;
            }
        }
    }
    return ans;
}

const s = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindow(s,t));
