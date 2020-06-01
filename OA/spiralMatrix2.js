/*
59. Spiral Matrix II
Medium

Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

function spiralMatrix2(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row[j] = 0;
        }
        result.push(row);
    }

    let number = 1;
    let square = n**2;
    //indexes
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bot = n - 1;

    while (number <= square) {

        for (let j = left; j <= right; j++) {
            result[top][j] = number;
            number += 1;
        }

        top += 1;

        for (let i = top; i <= bot; i++) {
            result[i][right] = number;
            number += 1;
        }

        right -= 1;

        for (let j = right; j >= left; j--) {
            result[bot][j] = number;
            number += 1;
        }

        bot -= 1;

        for (let i = bot; i >= top; i--) {
            result[i][left] = number;
            number += 1;
        }

        left += 1;
    }
    
    return result;
}

console.log(spiralMatrix2(4));
