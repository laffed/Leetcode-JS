/*
Given a list of reviews, a list of keywords and an integer k. Find the most popular k keywords in order of most to least frequently mentioned.

The comparison of strings is case-insensitive.
Multiple occurances of a keyword in a review should be considred as a single mention.
If keywords are mentioned an equal number of times in reviews, sort alphabetically.

Example 1:

Input:
k = 2
keywords = ["anacell", "cetracular", "betacellular"]
reviews = [
  "Anacell provides the best services in the city",
  "betacellular has awesome services",
  "Best services provided by anacell, everyone should use anacell",
]

Output:
["anacell", "betacellular"]

Explanation:
"anacell" is occuring in 2 different reviews and "betacellular" is only occuring in 1 review.
*/
//nlogn solution.
//another solution might be to use a trie. 

function topKMentionedKeywordReviews(k, keywords, reviews) {
    const hash = {};
    for (let word of keywords) {
        hash[word] = 0;
    }

    for (let i = 0; i < reviews.length; i++) {
        for (let j = 0; j < reviews[i].length; j++) {
            if (hash.hasOwnProperty(reviews[i][j])) {
                hash[reviews[i][j]] += 1;
            }
        }
    }

    const result = Object.keys(hash).sort((a,b) => {
        let compare = hash[b] - hash[a];
        return compare === 0 ? a.localeCompare(b) : compare;
    });
    return result.slice(0, k);
}

