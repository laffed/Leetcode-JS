/*
 In a given grid, each cell can have one of three values:
    1. value 0, representing an empty cell
    2. value 1, representing a fresh orange
    3. value 2, representing a rotten orange
Every min, any fresh orange that is adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a 
fresh organge. If this is impossible return -1 instead. 
*/


//model as BFS
function rottingOranges(grid) {
    let q = [];
    let numFresh = 0;
    let mins = 0;
    //push rotten oranges to q and count fresh oranges. 
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                q.push([i,j]);
            } 
            else if (grid[i][j] === 0) {
                numFresh++;
            }
        }
    }
    while (q.length && numFresh > 0) {
        let newQ = [];
        while(q.length) {
            let badOrange = q.shift();
            let newRottens = infectOthers(grid, badOrange[0], badOrange[1], newQ);
            numFresh -= newRottens;
        }
        mins++;
        q = newQ;
    }
    return (numFresh > 0 ? -1 : mins);
}


function infectOthers(grid, i, j, q) {
    let infected = 0;
    
    if (i > 0 && grid[i-1][j] === 0) {
        grid[i-1][j]++;
        infected++;
        q.push([i-1, j]);
    }
    if (j > 0 && grid[i][j-1] === 0) {
        grid[i][j - 1]++;
        infected++;
        q.push[i, j-1];
    }
    if (i < grid.length - 1 && grid[i+1][j] === 0) {
        grid[i+1][j]++;
        infected++;
        q.push([i+1,j]);
    }
    if (j < grid[i].length - 1 && grid[i][j+1] === 0) {
        grid[i][j+1];
        infected++;
        q.push([i, j+1]);
    }
    return infected;
}



let data = [[0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 1],
            [0, 1, 0, 0, 0]];

console.log(rottingOranges(data));
