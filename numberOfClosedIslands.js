/*
1254. Number of Closed Islands
Medium

Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

Example 1:
Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).

Example 2:
Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1

Example 3:
Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2
 
Constraints:
1 <= grid.length, grid[0].length <= 100
0 <= grid[i][j] <=1
*/

/*
 * Idea: Any island that is on perimeter is not a closed island. Any island within the perimeter is an island
 * Time O(r*c) Space O(r*c)
 */

function numberOfClosedIslands(grid) {
    let islandCount = 0;

    //start iterating within the outside perimeter
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            if (grid[i][j] === 0) {
                if (checkIsland(grid, i, j)) {
                    islandCount += 1;
                }
            }
        }
    }
    return islandCount;
}

function checkIsland(grid, i, j) {
    //check if recursed value is water or previously visited (-1 === visited);
    if (grid[i][j] === -1 || grid[i][j] === 1) return true;

    //if not then, this value is an island. check if it's on the perimeter
    if (isPerimeter(grid, i, j)) return false;

    //if not, island element is legal, recurse from here
    grid[i][j] = -1;

    let left = checkIsland(grid, i, j - 1);
    let right = checkIsland(grid, i, j + 1);
    let up = checkIsland(grid, i - 1, j);
    let down = checkIsland(grid, i + 1, j);

    return (left && right && up && down);
}

function isPerimeter(grid, i, j) {
    return (i <= 0 || j <= 0 || i >= grid.length - 1 || j >= grid[0].length - 1);
}

const input = [
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0]
];
console.log(numberOfClosedIslands(input));