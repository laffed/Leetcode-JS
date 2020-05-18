/*
505. The Maze II
Medium

There is a ball in a maze with empty spaces and walls. The ball can go through empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.

Given the ball's start position, the destination and the maze, find the shortest distance for the ball to stop at the destination. The distance is defined by the number of empty spaces traveled by the ball from the start position (excluded) to the destination (included). If the ball cannot stop at the destination, return -1.

The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The start and destination coordinates are represented by row and column indexes.

Example 1:
Input 1: a maze represented by a 2D array

0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0

Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (4, 4)

Output: 12
Explanation: One shortest way is : left -> down -> left -> down -> right -> down -> right.
*/

function maze2(maze, start, dest) {
    //create distance matrix to track current shortest distance to node
    const dist = [];
    for (let i = 0; i < maze.length; i++) {
        const row = [];
        for (let j = 0; i < maze[i].length; j++) {
            row[j] = -1;
        }
        dist.push(row);
    }

    //create q and directions array
    //set start dist to 0
    const q = [start];
    const dir = [[1,0],[-1,0],[0,1],[-1,0]];
    dist[start[0]][start[1]] = 0;

    //go through q
    while (q.length) {
        let curr = q.shift();

        //loop through every direction
        for (let d of dir) {
            //track count from curr
            let count = dist[curr[0]][curr[1]];
            let x = curr[0];
            let y = curr[1];

            //go straight until we hit a wall. stop at that node
            while (x + d[0] >= 0 && x + d[0] < maze.length && y + d[1] >= 0 && y + d[1] < maze[0].length && maze[x+d[0]][y+d[1]] !== 1) {
                x += d[0];
                y += d[1];
                count += 1;
            }

            //check if this is the first time visiting this node
            //or if the current path is shorter than the previous path
            //update dist and push curr node to q
            if (dist[x][y] === -1 || dist[x][y] > count) {
                dist[x][y] = count;
                q.push([x,y])
            }
        }
    }
    return dist[dest[0]][dest[1]];
}

