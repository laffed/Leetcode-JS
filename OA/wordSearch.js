/*
79. Word Search
Medium

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 
Constraints:
board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3
*/


function wordSearch(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0] && dfs(i, j, board, word, 0)) {
                return true;
            }
        }
    }
    return false;
}

function dfs(i, j, grid, target, index) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length ||
        grid[i][j] !== target[index] || grid[i][j] === '') {
        return false;
    }

    if (index === target.length - 1 && grid[i][j] === target[index]) {
        return true;
    }

    const temp = grid[i][j];
    grid[i][j] = '';
    
    const isFound = (dfs(i+1, j, grid, target, index + 1) ||
                     dfs(i-1, j, grid, target, index + 1) ||
                     dfs(i, j+1, grid, target, index + 1) ||
                     dfs(i, j-1, grid, target, index + 1));

    grid[i][j] = temp;

    return isFound;
}
