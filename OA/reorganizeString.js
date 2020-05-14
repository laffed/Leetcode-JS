/*
767. Reorganize String
Medium

Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:
Input: S = "aab"
Output: "aba"

Example 2:
Input: S = "aaab"
Output: ""
*/

//credit AminiCK

/*
The Idea:
The idea - Sort
1. Build a hash based on character count, sort the hash from the largest count to smallest
2. A character count that is larger than half of the string length is considered invalid
3. Start filling characters to all the even indexs, i.e. 0, 2, 4,..., when we got to the end, start filling odd indexes i.e. 1,3,5,...
4. By filling the characters this way, we can make sure that no same characters will be adjacent to each other
*/

function reorganizeString(S) {
    const result = [];
    const hash = {};
    for (let al in S) {
        hash[S[al]] = hash[S[al]] + 1 || 1;
    }

    const hashArr = Object.entries(hash).sort((a,b) => b[1] - a[1]);
    let index = 0;

    for (let i = 0; i < hashArr.length; i++) {
        let occur = hash[hashArr[i][0]];
        if (occur > parseInt((S.length + 1)/2)) return '';
        for (let j = 0; j < occur; j++) {
            if (index >= S.length) {
                index = 1;
            }
            result[index] = hashArr[i][0];
            index += 2;
        }
    }
    return result.join('');
}

console.log(reorganizeString('aab'));
