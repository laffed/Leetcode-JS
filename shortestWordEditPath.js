/*
 Given two words source and target, and a list of words, words, find the length of the shortest series of edits that transforms source to target. 

Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words. 

If the task is impossible, return -1
*/

/*
 EXAMPLE: 
 source = "bit", target = "dog";
 words = ["but", "put", "big", "pot", "pog", "dog", "lot"];
 output = 5;
 explanation: bit -> but -> put -> pot -> pog -> dog
*/

/*
Constraints:

[time limit] 5000ms
[input] string source
1 ≤ source.length ≤ 20
[input] string target
1 ≤ target.length ≤ 20
[input] array.string words
1 ≤ words.length ≤ 20
[output] array.integer 
*/

//make queue claas
function Queue() {
    collection = [];
    this.print = () => {console.log(collection)};

    this.enqueue = (element) => {
        collection.push(element);
    }

    this.size = () => {
        return collection.length;
    }

    this.dequeue = () => {
        return collection.shift();
    }

    this.isEmpty = () => {
        return (collection.length === 0);
    }
}

function shortestWordEditPath(source, target, words) {
    const mySet = new Set();
    for (word of words) {
        mySet.add(word);
    }
    let q = new Queue();
    q.enqueue(source);
    let level = 0;
    let alpha = 'abcdefghijklmnopqrstuvwxyz';

    while(!q.isEmpty()) {
        let size = q.size();
        for (let i = 0; i < size; i++) {
            let currentWord = q.dequeue();
            let charArr = currentWord.split('');
            for (let j = 0; j < charArr.length; j++) {
                let originalChar = charArr[j];
                for (let k = 0; k < alpha.length; k++) {
                    if (charArr[j] === alpha[k]) {
                        continue;
                    }
                    charArr[j] = alpha[k];
                    let newWord = charArr.join('');
                    if (newWord === target) return level + 1;
                    if (mySet.has(newWord)) {
                        q.enqueue(newWord);
                        mySet.delete(newWord);
                    }
                }
                charArr[j] = originalChar;
            }
        }
        level++;
    }
}


console.log(shortestWordEditPath("bit", "dog", ["but", "put", "big", "pot", "pog", "dog", "lot"]))
