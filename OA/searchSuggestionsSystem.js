/*
 Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed. 

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
*/

//FIRST SOLUTION O(kN^2) N = products.length, k = searchWord.length
function searchSuggestionsSystem(products, searchWord) {
    let copy = [...products];
    let sorted = copy.sort((a,b)=> a.localeCompare(b));

    let result = [];
    for (let i = 0; i < searchWord.length; i++) {
        sorted = sorted.filter((p) => p[i] === searchWord[i]);
        result.push(sorted);
    }
    return result;
}

let products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];

console.log(searchSuggestionsSystem(products, "mouse"));
