/*
Given a triangle, find the minimum path sum from top to bottom. Each step moving adjacent next row.

[
     [3], 
    [2,4],
   [6,3,9],
  [4,8,8,3]
]
The minimum path sum from top to bottom is 10 (i.e., 3 + 2 + 6 + 4 = 15).
*/

// 1 + 2*1 + 2*2 + 2*3... + 2*n = n*(n-1) ~= O(n^2)
function triangle(grid) {
    let stack = [[0,0]];
    
    let depth = 0;
    let result = 0;
    while (stack.length) {
        let curr = stack.pop();
        let a = curr[0];
        let b = curr[1];
        result = dfs(a, b, grid, depth, 0);
        
    }
    return result;
}

function dfs(i, j, grid, depth, sum = 0){
    if (depth === grid.length - 1) {
        return sum
    }
    let x1 = j;
    let x2 = j+1;
    sum += grid[i][j];
    return Math.min(dfs(i+1, x1, grid, depth+1, sum), dfs(i+1, x2, grid, depth+1, sum));
}





function botTriangle(grid) {
    let q = [[0,0]];
    
    let sigma = grid[0][0]; //3
    let depth = 0;
   
        while (q.length || depth <= grid.length) {
            let curr = q.shift();
            let a = curr[0];
            let b = curr[1];
            let [nA, nB] = helper(a,b, grid);
            sigma += grid[nA][nB];
            q.push([nA, nB]);
            depth += 1;
        }
    return sigma;
}

function helper(i, j, grid) {
    let nextLayer = i + 1;
    if (nextLayer > grid.length) return;
    let result = [];
    let min = Number.POSITIVE_INFINITY;
    for (let k = j; k <= j + 1; k++) {
        if (min > grid[i][k]) {
            min = grid[i][j];
            result[0] = i;
            result[1] = k;
        }
    }
    return result;
}
