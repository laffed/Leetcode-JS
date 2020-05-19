/*
ou have a map that marks the locations of treasure islands. Some of the map area has jagged rocks and dangerous reefs. Other areas are safe to sail in. There are other explorers trying to find the treasure. So you must figure out a shortest route to one of the treasure islands.

Assume the map area is a two dimensional grid, represented by a matrix of characters. You must start from one of the starting point (marked as S) of the map and can move one block up, down, left or right at a time. The treasure island is marked as X. Any block with dangerous rocks or reefs will be marked as D. You must not enter dangerous blocks. You cannot leave the map area. Other areas O are safe to sail in. Output the minimum number of steps to get to any of the treasure islands.

Example:

Input:
[['S', 'O', 'O', 'S', 'S'],
 ['D', 'O', 'D', 'O', 'D'],
 ['O', 'O', 'O', 'O', 'X'],
 ['X', 'D', 'D', 'O', 'O'],
 ['X', 'D', 'D', 'D', 'O']]

Output: 3
*/

//very similar to treasureIsland1 where we only care about the shortest dist
//to any target from any starting point. 
//this time we'll initially add all S's to the q

function treasureIsland2(grid) {
    //create q, add all S's to q, set S's to visited
    let q = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 'S') {
                q.push([i,j]);
                grid[i][j] = 'D';
            }
        }
    }
    
    let steps = 0;
    const dir = [[1,0],[-1,0],[0,1],[0,-1]];

    while (q.length) {
        let newQ = [];
        while (q.length) {
            let [i,j] = q.shift();
            //check each neighbor of this layer (bfs)
            for (let d of dir) {
                let x = i + d[0];
                let y = j + d[1];

                if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 'D') {
                    continue;
                }
                //check if this neighbor is a target
                if (grid[x][y] === 'X') {
                    return steps + 1;
                }
                grid[x][y] = 'D';
                newQ.push([x,y]);
            }
        }
        steps += 1;
        q = newQ;
    }
    return -1;
}

const input = [['S', 'O', 'O', 'S', 'S'],
 ['D', 'O', 'D', 'O', 'D'],
 ['O', 'O', 'O', 'O', 'X'],
 ['X', 'D', 'D', 'O', 'O'],
 ['X', 'D', 'D', 'D', 'O']];
//expected 3

console.log(treasureIsland2(input));
