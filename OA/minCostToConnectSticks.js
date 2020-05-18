/*
1167. Minimum Cost to Connect Sticks
Medium

You have some sticks with positive integer lengths.

You can connect any two sticks of lengths X and Y into one stick by paying a cost of X + Y.  You perform this action until there is one stick remaining.

Return the minimum cost of connecting all the given sticks into one stick in this way.

Example 1:
Input: sticks = [2,4,3]
Output: 14

Example 2:
Input: sticks = [1,8,3,5]
Output: 30
*/
//using a minHeap (psuedo javascript solution utilizing a sort to mimic minHeap)
// O(nlogn)

function minCostToConnectSticks(sticks) {
    let minCost = 0;
    const minHeap = [];
    for (let stick of sticks) {
        minHeap.push(stick);
    }

    while (minHeap.length > 1) {
        //mimic minHeap logN insertion
        minHeap.sort((a,b) => a-b);
        
        let first = minHeap.shift();
        let sec = minHeap.shift();
        let sum = first + sec;
        minCost += sum;
        minHeap.push(sum);
    }
    return minCost;
}
const sticks1 = [2, 4, 3];
const sticks2 = [1, 8, 3, 5];

console.log(minCostToConnectSticks(sticks1));
console.log(minCostToConnectSticks(sticks2));


