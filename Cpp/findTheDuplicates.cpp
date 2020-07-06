/*
Find The Duplicates
Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport numbers that are both in arr1 and arr2. Note that the output array should be sorted in an ascending order.

Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

Example:

input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]

output: [3, 6, 7] # since only these three values are both in arr1 and arr2
Constraints:

[time limit] 5000ms

[input] array.integer arr1

1 ≤ arr1.length ≤ 100
[input] array.integer arr2

1 ≤ arr2.length ≤ 100
[output] array.integer
*/

#include <iostream>
#include <vector> 

using namespace std;

bool binarySearch(vector<int> arr, int term) {
    int l = 0; 
    int r = arr.size() - 1; 

    while (l <= r) {
        int m = (l+r)/2;
        if (arr[m] == term) {
            return true;
        } 
        if (arr[m] > term) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return false;
}

vector<int> binSearch(vector<int> m, vector<int> n) {
    vector<int> result;
    int i = 0; 
    while (i < n.size()) {
        if (binarySearch(m, n[i])) {
            result.push_back(n[i]);
        }
        i += 1;
    }
    return result;
}

vector<int> simpleSearch(vector<int> m, vector<int> n) {
    vector<int> result;
    int i = 0;
    int j = 0;
    
    while (i < m.size() && j < n.size()) {
        if (m[i] == n[j]) {
            result.push_back(m[i]);
            i += 1;
            j += 1;
        }
        else if (m[i] < n[j]) {
            i += 1;
        } else {
            j += 1;
        }
    }
    return result;
}

int main() {
    return 0;
}

vector<int> findDuplicates(const vector<int>& arr1, const vector<int>& arr2) {
    int m = arr1.size();
    int n = arr2.size();

    if (m > 2*n) {
        return binSearch(arr1, arr2);
    } else if (n > 2*m) {
        return binSearch(arr2, arr1);
    } else {
        return simpleSearch(arr1, arr2);
    }
}
