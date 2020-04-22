/*
42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

Example:
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/

function trappingRainWater(heights) {
    const leftMaxH = [];
    const rightMaxH = [];
    let sigmaWater = 0;
    let currWater = 0;
    let currMaxH = 0;

    //find max looping left to right
    for (let i = 0; i < heights.length; i++) {
        currMaxH = Math.max(currMaxH, heights[i]);
        leftMaxH[i] = currMaxH;
    }

    //reset current max height
    currMaxH = 0;

    //find max looping right to left
    for (let j = heights.length-1; j >= 0; j--) {
        currMaxH = Math.max(currMaxH, heights[j]);
        rightMaxH[j] = currMaxH;
    }

    //loop through both, find min, subtract current height
    for (let k = 0; k < heights.length; k++) {
        currWater = Math.min(leftMaxH[k], rightMaxH[k]) - heights[k];
        sigmaWater += currWater;
    }

    return sigmaWater;
}

console.log(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]))
