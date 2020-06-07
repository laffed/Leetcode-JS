/*
694. Number of Distinct Islands
Medium

Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Count the number of distinct islands. An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.

Example 1:
11000
11000
00011
00011
Given the above grid map, return 1.

Example 2:
11011
10000
00001
11011
Given the above grid map, return 3.

Notice that:

11
1

and

 1
11

are considered different island shapes, because we do not consider reflection / rotation.
Note: The length of each dimension in the given grid does not exceed 50.
*/

/*
Idea: Track the DFS recursive path for each island. Unique islands will have unique paths. 
Time O(r*c) Space O(r*c)
*/

function numberOfDistinct(grid) {
    const uniquePaths = new Set();
    /* Path directions:
     * X = start                   D = down 
     * O = out of bounds || 0      L = left 
     * U = up                      R = right */

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                let path = getPath(grid, i, j, 'X');
                uniquePaths.add(path);
            }
        }
    }
    return uniquePaths.size;
}

function getPath(grid, i, j, direction) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) return 'O';

    grid[i][j] = 0;

    let left = getPath(grid, i, j-1, 'L');
    let right = getPath(grid, i, j+1, 'R');
    let up = getPath(grid, i-1, j, 'U');
    let down = getPath(grid, i+1, j, 'D');

    return direction + left + right + up + down;
}
