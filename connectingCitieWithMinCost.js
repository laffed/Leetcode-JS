/*
1135. Connecting Cities With Minimum Cost
Medium

There are N cities numbered from 1 to N.

You are given connections, where each connections[i] = [city1, city2, cost] represents the cost to connect city1 and city2 together.  (A connection is bidirectional: connecting city1 and city2 is the same as connecting city2 and city1.)

Example 1:
Input: N = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]
Output: 6
Explanation: 
Choosing any 2 edges will connect all cities so we choose the minimum 2.

Example 2:
Input: N = 4, connections = [[1,2,3],[3,4,4]]
Output: -1
Explanation: 
There is no way to connect all cities even if all edges are used.
 
Note:
1 <= N <= 10000
1 <= connections.length <= 10000
1 <= connections[i][0], connections[i][1] <= N
0 <= connections[i][2] <= 10^5
connections[i][0] != connections[i][1]

IDEA:
Using Kruskal's Algorithm for finding Min Spanning Tree 
Using Union-Find for fast look up and merging. 
*/

function minimumCost(N, connections) {
    let n = N;
    let res = 0;
    const parents = [];
    for (let i = 0; i < N; i++) {
        parents.push(i);
    }
   
    connections.sort((a,b) => a[2] - b[2]);

    for (const [u, v, cost] of connections) {
        if (find(u) !== find(v)) {
            res += cost;
            union(u,v);
        }
    }
    return n === 1 ? res : -1; 
}

function union(u, v) {
    const p1 = find(u);
    const p2 = find(v);

    if (p1 !== p2) {
        parents[p1] = p2;
        n -= 1;
    }
}

function find(u) {
    if (u === parents[u]) {
        return u;
    }
    //path compression
    return parents[u] = find(parents[u]);
}
