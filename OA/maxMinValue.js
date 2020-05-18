/*
1102. Path With Maximum Minimum Value
Medium

Given a matrix of integers A with R rows and C columns, find the maximum score of a path starting at [0,0] and ending at [R-1,C-1].

The score of a path is the minimum value in that path.  For example, the value of the path 8 →  4 →  5 →  9 is 4.

A path moves some number of times from one visited cell to any neighbouring unvisited cell in one of the 4 cardinal directions (north, east, west, south).

Example 1:

Input: [[5,4,5],[1,2,6],[7,4,6]]
Output: 4
Explanation: 
The path with the maximum score is highlighted in yellow. 
*/

//psuedo maxHeap in JS using sort to mimic priority, and set to mimic no duplication

function maxMinValue(A) {
    const pqMaxHeap = [[A[0][0], 0, 0]]; //[lowest val seen so far, i, j];
    const dir = [[1,0],[-1,0],[0,1],[0,-1]]; 
    let set = new Set();
    set.add(`0,0`); 
    
    
    while (pqMaxHeap.length) {
        pqMaxHeap.sort((a,b) => b[0] - a[0]);
        let curr = pqMaxHeap.shift();
        let min = curr[0];
        let a = curr[1];
        let b = curr[2];
        
        if (a === A.length - 1 && b === A[0].length - 1) {
            return curr[0];
        }
        
        for (let d of dir) {
            let x = a + d[0];
            let y = b + d[1];
            if (x < 0 || x >= A.length || y < 0 || y >= A[0].length || set.has(`${x},${y}`)) {
                continue;
            }
            if (min > A[x][y]) {
                pqMaxHeap.push([A[x][y], x, y]);
            } else {
                pqMaxHeap.push([min, x, y]);
            }
            set.add(`${x},${y}`)
        }
    }
    return -1; 
};
