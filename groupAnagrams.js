/*
 Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

function groupAnagrams(strs) {
    const result = [];
    const dict = {};
    for (let i = 0; i < strs.length; i++) {
        let curr = strs[i];
        let currArr = curr.split('');
        let test = currArr.sort().join('');
        if (dict.hasOwnProperty(test)) {
            dict[test].push(curr);
        } else {
            dict[test] = [curr];
        }
    }
    let values = Object.values(dict);
    for (let arr of values) {
        result.push(arr);
    }
    return result;
}

let data = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(data));
