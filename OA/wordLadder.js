/*
127. Word Ladder
Medium

2925

1126

Add to List

Share
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/
//Time = Space = O(M^2 x N); M = len of each word, N = num of words input list

function ladderLength(beginWord, endWord, wordList) {
    //bfs
    let q = [beginWord];
    const dict = new Set(wordList);
    const seen = new Set(q);
    let dist = 1;

    while (q.length) {
        let newQ = [];
        while (q.length) {
            let word = q.shift();
            if (word === endWord) return dist;
            let arr = word.split('');
            for (let i = 0; i < arr.length; i++) {
                for (let a = 0; a < 26; a++) {
                    arr[i] = String.fromCharCode(97+a);
                    let newWord = arr.join('');
                    if (!seen.has(newWord) && dict.has(newWord)) {
                        newQ.push(newWord);
                        seen.add(newWord);
                    }
                    arr[i] = word[i];
                }
            }
        }
        q = newQ;
        dist += 1;
    }
    return 0;
}
