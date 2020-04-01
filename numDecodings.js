//Leetcode #91 Decode Ways
//https://leetcode.com/problems/decode-ways/
//
//A message from A-Z is being encoded to numbers using the following mapping: A -> 1, B -> 2... Z -> 26

function helper(data, k) {
    if (k === 0) {
        return 1;
    }

    let s = data.length - k;
    if (data[s] == 0) {
        return 0;
    }
    let result = helper(data, k-1);
    if (k >=2 && int(data[s:s+2]) <= 26) {
        result += helper(data, k - 2)
    }
    return result;
}

function num_ways(data) {
    return helper(data, data.length)
}
