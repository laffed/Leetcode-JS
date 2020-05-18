/*
542. 01 Matrix
Medium

Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

Example 1:

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Example 2:

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]
 
Note:

The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.
*/
//credit: codingbarista

//track all instances of 0 and update dist from zeroes with bfs

function updateMatrix(matrix) {
    const q = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                q.push([i,j]);
            } else {
                //update all 1 values to inf
                matrix[i][j] = Number.POSITIVE_INFINITY;
            }
        }
    }

    const dir = [[1,0],[-1,0],[0,1],[0,-1]];

    while (q.length) {
        let [i, j] = q.shift();

        //bfs from current 0 point
        for (let d of dir) {
            let row = i + d[0];
            let col = j + d[1];

            //if out of bounds or new val is <= the original node + 1 step
            if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[i].length || matrix[row][col] <= matrix[i][j] + 1) {
                continue;
            }
            //push new val to q if valid
            //update matrix at new value to one step away from original zero node
            q.push([row, col]);
            matrix[row][col] = matrix[i][j] + 1;
        }
    }
    return matrix;
}

const grid1 = [[0,0,0],
 [0,1,0],
 [0,0,0]];
const grid2 = [[0,0,0],
 [0,1,0],
 [1,1,1]];

console.log(updateMatrix(grid1));
console.log(updateMatrix(grid2));
