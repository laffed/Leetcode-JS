/*
973. K Closest Points to Origin
Medium

We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

Example 1:
Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

Example 2:
Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
*/

//First Solution: Sort by Distance
//Time O(NLogN) Space O(N)

function kClosestPoints1(points, k) {
    const result = points.sort((a,b) => {
        let aDist, bDist;
        let [a1, a2] = a;
        let [b1, b2] = b;

        aDist = Math.sqrt((a1**2 + a2**2));
        bDist = Math.sqrt((b1**2 + b2**2));
        return aDist - bDist;
    })

    return result.slice(0, k);
}


//Second Solution: Quick Select, Divide and Conquer
//Time avg O(N), worst O(N**2), Space O(N)

function kClosestPoints2(points, k) {
    quickSelect(points, k, 0, points.length-1);
    return points.slice(0, k);
}

function quickSelect(points, k, low, high) {
    if (low >= high) return; 

    const partPoint = partition(points, low, high);

    if (partPoint === k - 1) return;
    if (partPoint < k - 1) {
        quickSelect(points, k, partPoint + 1, high);
    } else {
        quickSelect(points, k, low, partPoint - 1);
    }

function partition(points, low, high) {
    const pivot = points[high];
    let i = low;
    let j = low;
    while (i < high) {
        if (getDist(points[i]) < getDist(pivot)) {
            swap(points, i, j);
            j++;
        }
        i++;
    }
    swap(points, high, j);
    return j;
}

function getDist(point) {
    //not including sqrt to save computation
    return point[0]**2 + point[1]**2
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
