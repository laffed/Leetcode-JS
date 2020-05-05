/*
286. Walls and Gates
Medium

You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example: 
Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF

After running your function, the 2D grid should be:
  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
*/

function wallsAndGates(rooms) {
    //iterate and find 0 values
    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[i].length; j++) {
            if (rooms[i][j] === 0) {
                //call dfs from here
                dfs(i, j, 0, rooms);
            }
        }
    }
    return rooms;
}

function dfs(i, j, count, grid) {
    //base case: i || j out of bounds || curr count is worse than best found value for rooms;
    if (i < 0 || i >= grid.length || j < 0 || j > grid[i].length || grid[i][j] < count) {
        return;
    }

    //update curr grid val to count
    grid[i][j] = count;
    
    //recursively call next node incrementing dist away from gate
    dfs(i - 1, j, count + 1, grid);
    dfs(i + 1, j, count + 1, grid);
    dfs(i, j - 1, count + 1, grid);
    dfs(i, j + 1, count + 1, grid);
}

