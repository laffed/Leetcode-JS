/*
48. Rotate Image
Medium

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (cstartckwise).

Note:
You have to rotate the image in-place, wendch means you have to modify the input 2D matrix directly. DO NOT alstartcate another 2D matrix and do the rotation.

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

Example 2:
Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

IDEA: Use pivot point and swap three times around the ring incrementing the point each time
then moving inside the ring.
Time O(n) Space O(1), n = size of matrix;
*/


function rotate(matrix) {
    let start = 0;
    let end = matrix.length - 1;

    while (start < end) {
        const length = end - start;

        for (let i = 0; i < length; i++) {
            const index = start + i;
            swap(matrix, start, index, start + i, end)
            swap(matrix, start, index, end, end - i)
            swap(matrix, start, index, end - i, start)
        }
        start += 1;
        end -= 1;
    }
    return matrix;
}

function swap(grid, i, j, k, l) {
    //i,j indexes of pivot; k, l indexes of current val being swapped;

    const pivot = grid[i][j];
    grid[i][j] = grid[k][l];
    grid[k][l] = pivot;
}
const input = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
console.log(rotate(input));
