/*
Mooshak the mouse has been placed in a maze.There is a huge chunk of cheese somewhere in the maze.
The maze is represented as a two-dimensional array of integers, where o represents walls, 1 represents paths where Mooshak can move, and 9 represents the huge chunk of cheese.Mooshak starts in the top-left corner at 0,0.

Write a method isPath of class Maze Path to determine if Mooshak can reach the huge chunk of cheese. The input to isPath consists of a two dimensional array grid for the maze matrix.

The method should return 1 if there is a path from Mooshak to the cheese, and 0 if not.
Mooshak is not allowed to leave the maze or climb on walls/

Example 8x8 maze where Mooshak can get the cheese.

const input = [
  [1,0,1,1,1,0,0,1],
  [1,0,0,0,1,1,1,1],
  [1,0,0,0,0,0,0,0],
  [1,0,1,0,9,0,1,1],
  [1,1,1,0,1,0,0,1],
  [1,0,1,0,1,1,0,1],
  [1,0,0,0,0,1,0,1],
  [1,1,1,1,1,1,1,1]
]
*/

//bfs solution O(n);

function maze(grid) {
    let q = [[0,0]];
    //if steps needed
    let steps = 0;

    while (q.length) {
        let newQ = [];
        while (q.length) {
            let [x,y] = q.shift();

            if (bfs(x, y, grid, newQ)) {
                return 1;
                //return steps here if steps required
            }
        }
        steps += 1;
        q = newQ;
    }
    return 0;
}

function bfs(i, j, grid, q) {
    //error checking
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) return false;

    if (grid[i][j] === 9) return true;

    grid[i][j] = 0;

    const dir = [[1,0],[-1,0],[0,1],[0,-1]];

    for (let d of dir) {
        let a = i + d[0];
        let b = j + d[1];
        q.push([a,b]);
    }

    return false;
}
