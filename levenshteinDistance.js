//Leetcode #72 Edit Distance
//https://leetcode.com/problems/edit-distance
//
//Time: O(N x M) 
//Space: O(N x M)
//
//Where N, M = string1.length, string2.length respectively


function levDist(str1, str2) {
    const grid = [];
    for (let i = 0; i < str1.length + 1; i++) {
        const row = [];
        for (let j = 0; j < str2.length + 1; j++) {
            row.push(j);
        }
        row[0] = i;
        grid.push(row)
    }

    for (let i = 1; i < str1.length + 1; i++) {
        for (let j = 1; j < str2.length + 1; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                grid[i][j] = grid[i - 1][j - 1];
            } else {
                grid[i][j] = 1 + Math.min(grid[i-1][j-1], grid[i-1][j], grid[i][j-1]);
            }
        }
    }
    return grid[str1.length][str2.length]
}


console.log(levDist("jrok", "trek"))
