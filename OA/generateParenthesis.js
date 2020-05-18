/*
22. Generate Parentheses
Medium

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

//O((4**n)/(n**(1/2)))
/*
based on these criteria:
1. Number of open parens are >= number of closed parens
2. Number of open parens are <= n
3. Permutation length == 2*n
*/

function genParen(n, str = '', open = 0, arr = []) {
    const closed = str.length - open;

    if (str.length === 2 * n) {
        arr.push(str);
    }
    if (open < n) {
        genParen(n, str + '(', open + 1, arr);
    }
    if (closed < open) {
        genParen(n, str + ')', open, arr);
    }

    return arr;
}

console.log(genParen(3));
