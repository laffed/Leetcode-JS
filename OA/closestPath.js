/*
You are in charge of preparing a recently purchased lot for Amazon’s building. The lot is covered with trenches and has a single obstacle that needs to be taken down before the foundation is prepared for the building. The demolition robot must remove the obstacle before the progress can be made on the building. Write an algorithm to determine the minimum distance required for the demolition robot to remove the obstacle

Input: The input of the function has 3 arguments:
numRows – number of rows
numColumns – number of columns
lot – 2d grid of integers

*/
const lot1 = [ //3
[1, 0, 0], 
[1, 0, 0],
[1, 9, 1]
]
const lot2 = [[1,1,1,0], //5
              [1,0,1,1],
              [1,0,0,1],
              [1,1,9,1]]

const lot3 = [[1,1,1,0],  //7
              [0,0,1,1],
              [1,0,0,1],
              [1,1,9,1]]


function closestPath(grid) {
  let q = []; //[i,j] 
  q.push([0,0]);
  let count = 0;
  while(q.length) {
    let newQ = [];
    while(q.length) {
      let curr = q.shift();
     if (grid[curr[0]][curr[1]] === 9) return count;
      grid[curr[0]][curr[1]] = 0;
      checkValue(curr[0]+1, curr[1], grid, newQ)
      checkValue(curr[0]-1, curr[1], grid, newQ);
      checkValue(curr[0], curr[1]+1, grid, newQ);
      checkValue(curr[0], curr[1]-1, grid, newQ);
    }
    count++; 
    q = newQ;
  }
  return -1
}
//grid[i][j] = 0
function checkValue(i, j, grid, Q) {
  if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[i].length) {
    return;
  }
  if (grid[i][j] === 1 || grid[i][j] === 9) {
    /*grid[i][j] = 0;*/
    Q.push([i, j]);
  }
}

console.log("result:", closestPath(lot3)) 
