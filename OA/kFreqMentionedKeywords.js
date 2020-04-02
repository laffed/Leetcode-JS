//given a list of reviews, a list of keywords, and an int k. 
//Find the most popular words k keywords in order of most to least freq mnetioned. The comparison of strings is case-senstive. If keywords are mentioned an equal num of times in reviews, sort alphabetically. 


//Input
let k = 2
let keywords = ["anacell", "cetracular", "betacellular"]
let reviews = [
  "Anacell provides the best services in the city",
  "betacellular has awesome services",
  "Best services provided by anacell, everyone should use anacell",
]

//Output:
//["anacell", "betacellular"]

function kWords(reviews, keywords, k) {
    let output = [];
    let dict = {};

    for (let i = 0; i < reviews.length; i++ ) {
        let stringArr = reviews[i].split(' ');
        for (let j = 0; j < stringArr.length; j++) {
            for (let y = 0; y < keywords.length; y++) {
                if (keywords[y].toLowerCase() === stringArr[j].toLowerCase()) {
                    dict[keywords[y]] = dict[keywords[y]] + 1 || 1;
                }
            }
        }
    }
    let entry = Object.entries(dict);
    let sortedEntry = entry.sort((a, b) => {
        return a[1] > b[1] ? -1 : 1;
    })
    for (let z = 0; z < k; z++) {
        output.push(sortedEntry[z][0]) ;
    }
    return output;
}


console.log(kWords(reviews, keywords, k));
