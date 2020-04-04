/*
There are 8 prison cells in a row, and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:

If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.
(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)

We describe the current state of the prison in the following way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.

Given the initial state of the prison, return the state of the prison after N days (and N such changes described above.)

Input: cells = [0,1,0,1,1,0,0,1], N = 7
Output: [0,0,1,1,0,0,0,0]
*/

function prisonAfterNDays(cells, N) {
    
    //size of the pattern length
    let size = 0;
    //if we find the pattern end within N days
    let patternFound = false;
    //keeping track of all visited permutations
    let set = new Set();

    //loop through N days updating cells with new permutation
    for (let i = 1; i <= N; i++) {
        //find next days permutation
        let nextDayVal = nextDay(cells);
        //stringfy and add to set if not in set and adding to size of pattern
        let valString = nextDayVal.join('');
        if(!set.has(valString)) {
            set.add(valString);
            size++;
        } else {
            patternFound = true;
            break;
        }
        //update cells to next day
        cells = nextDayVal;
    }
    if (patternFound) {
        //reduce N to minimize redundant calculations
        N = N % size;
        for (let i = 1; i <= N; i++) {
            cells = nextDay(cells);
        }
    }
    return cells;
}

function nextDay(cells) {
    let result = [];

    //loop through current permutation and flip vals accordingly
    for (let i = 0; i < cells.length; i++) {
        //first and last val of cell can never be 1 on next permutation;
        if (i === 0 || i === cells.length - 1) {
            result[i] = 0;
        }
        else if (cells[i-1] === cells[i+1]) {
            result[i] = 1;
        } else {
            result[i] = 0;
        }
    }
    return result;
}

let cells = [0,1,0,1,1,0,0,1];

console.log(prisonAfterNDays(cells, 7));
