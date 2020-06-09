/*
347. Top K Frequent Elements
Medium

2863

205

Add to List

Share
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.
*/

//first method: sorted hash, (heap can also work) 
//Time O(nLogn) Space O(n);

function topKFrequentElements1(nums, k) {
    const count = {};
    for (let num of nums) {
        count[num] = count[num] + 1 || 1;
    }

    return Object.keys(count).sort((a,b) => count[b] - count[a]).slice(0, k);
}

//second method: bucket sort
//Time O(nLogn) Space O(n);

function topKFrequentElements2(nums, k) {
    const count = {};
    const bucket = [];
    const result = [];
    for (let i = 0; i <= nums.length; i++) {
        bucket[i] = [];
    }

    for (let num of nums) {
        count[num] = count[num] + 1 || 1;
    }

    //bucket indexes represent number of occurences
    let i = bucket.length - 1;
    while (k > 0 && i >= 0) {
        while (k > 0 && bucket[i].length) {
            let el = bucket[i].shift();
            result.push(el);
            k -= 1;
        }
        i -= 1;
    }
    return result;
}

//third method: Quickselect, Hoare's Algorithm
//the k'th elements in a sorted array will be the k'th indexes.
//using quickselect, we determine which indexes these are irrespective of individual element order
//Time O(n**2) T_avg O(n) Space O(n)

function topKFrequentElements3(nums, k) {
    if(nums.length===k) return nums;
  const map = nums.reduce((total, elem) => {
    total[elem] = (total[elem] || 0) + 1;
    
    return total;
  },{});
  
  //console.log('======' , map);
  const newNums = Object.keys(map).map((elem) => parseInt(elem));
  if(newNums.length===k) return newNums;
  quickSelect(newNums, map, 0, newNums.length-1, k);
  //.log(newNums);
  
  return newNums.slice(0,k)
};

function quickSelect(nums, map,  start, end, k){
  console.log('quickselect ', nums);
  const pivot = nums[(start+end)>>1];
  let low = start,
      high = end;
  
  while(low <= high){
    while(map[nums[low]] > map[pivot] && low <= high)
      low++;
    while(map[nums[high]] < map[pivot] && low <= high)
      high--;
    
    if(low <= high){
      swap(nums, low, high);
      low++;
      high--;
    }
  }
  
  if(low <= k)
    quickSelect(nums, map, low, end, k);
  if(high >= k)
    quickSelect(nums, map, start, high, k);

}

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];    
}
