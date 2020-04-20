/*
 You have a map that marks the location of a treasure island. Some of the map area has jagged rocks and dangerous reefs. Other areas are safe to sail in. There are other explorers trying to find the treasure. So you must figure out a shortest route to the treasure island.

Assume the map area is a two dimensional grid, represented by a matrix of characters. You must start from the top-left corner of the map and can move one block up, down, left or right at a time. The treasure island is marked as X in a block of the matrix. X will not be at the top-left corner. Any block with dangerous rocks or reefs will be marked as D. You must not enter dangerous blocks. You cannot leave the map area. Other areas O are safe to sail in. The top-left corner is always safe. Output the minimum number of steps to get to the treasure.

Example:

Input:
[['O', 'O', 'O', 'O'],
 ['D', 'O', 'D', 'O'],
 ['O', 'O', 'O', 'O'],
 ['X', 'D', 'D', 'O']]

Output: 5
Explanation: Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) The minimum route takes 5 steps.
*/

function treasureIsland(grid) {
    //create q 
    let q = [];
    //push start to q
    q.push([0,0]);
    let steps = 0;

    while (q.length) {
        let newQ = [];
        while (q.length) {
            //dequeue
            let curr = q.shift();
            let r = curr[0];
            let c = curr[1];
            if (isSafe(r, c, grid)) {
                if (grid[r][c] === 'X') return steps;
                //if the current val isnt X, push all children to q
                newq.push([r+1, c]);
                newq.push([r-1, c]);
                newq.push([r, c+1]);
                newq.push([r, c-1]);
                grid[r][c] = "D";
            }
        }
        steps += 1;
        q = newQ;
    }
    return -1;
}

function isSafe(i, j, grid) {
    return (i >= 0 && j >= 0 && i < grid.length && j < grid[i].length && grid[i][j] != 'D');
}

