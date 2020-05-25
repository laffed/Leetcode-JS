//A sorted arr of distinct int is shifted to the left by an unknown offset
//given shiftArr and target num, implement a function shiftedArrSearch that 
//finds and returns the index of num in shiftArr. If the num isn't in shiftArr
//return -1

function shiftedArraySearch(shiftArr, num) {
    return helper(shiftArr, num, 0, shiftArr.length -1);
}

function helper(array,  target, left, right) {
    if (left > right) return -1;

    const middle = Math.floor((left + right) /2);
    const potentialMatch = array[middle];
    const leftNum = array[left];
    const rightNum  = array[right];
    if (target === potentialMatch) {
        return middle;
    }
    else if (leftNum <= potentialMatch) {
        if (target < potentialMatch && target >= leftNum) {
            return helper(array, target, left, middle - 1);
        } else {
            return helper(array, target, middle + 1, right);
        }
    } else {
        if (target > potentialMatch && target <= rightNum) {
            return helper(array, target, middle + 1, right);
        } else {
            return helper(array, target, left, middle - 1)
        }
    }
}

//other implementation:
function shiftedSearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left+right)/2);

        if (array[mid] === target) return mid;

        //if the left side is sorted
        if (array[left] <= array[mid]) {
            //if target is within this sorted array
            if (array[left] <= target && target < array[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { //right side is sorted
            //if the target is within this sorted array
            if (array[mid] < target && target <= array[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}
const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 45];
console.log(shiftedArraySearch(array, 33))
