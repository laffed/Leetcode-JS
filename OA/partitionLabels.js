/*
763. Partition Labels
Medium

A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

Note:
S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only.
*/
//credit DawChihLiou
//greedy approach O(N)
//determine the last position of each char

function partitionLabel(S) {
    //alpha array to keep track of last occur
    const last = Array(26).fill(-1);
    const partitions = [];
    let anchor = 0;
    let end = 0;

    //populate last arr with last occur
    for (let i = 0; i < S.length; i++) {
        last[S.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }

    //loop through and partition
    for (let i = 0; i < S.length; i++) {
        end = Math.max(end, last[S.charCodeAt(i) - 'a'.charCodeAt(0)]);
        if (i === end) {
            partitions.push(end - anchor + 1);
            anchor = end + 1;
        }
    }
    return partitions;
}

const S1 = "ababcbacadefegdehijhklij";
console.log(partitionLabel(S1));
