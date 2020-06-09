/*
1192. Critical Connections in a Network
Hard

There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.

Example 1:

Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.

Constraints:
1 <= n <= 10^5
n-1 <= connections.length <= 10^5
connections[i][0] != connections[i][1]
There are no repeated connections.
*/
//Niave Solution would be to delete any connection and perform dfs on the rest of the connections. If you traverse
//less nodes than n, that connection deleted is a critical connections. Time O((V+E)*E) -> O(E**2)
//Optimal Solution:
//Idea: Tarjan's algorithm for strongly connected components
//Identify low link value for all nodes
//Time O(n)

function criticalConnections(nums, connections) {
    //build graph
    const graph = [];
    for (let i = 0; i < n; i++) {
        graph.push([]);
    }

    for (const [u, v] of connections) {
        graph[u].push(v);
        graph[v].push(u);
    }

    //initialize
    let time = 0; //time when discovered each vertex
    const result = [];
    const low = []; //low[u] records low-link value from u
    const disc = []; //disc[u] records the time when u was discovered

    for (let i = 0; i < n; i++) {
        disc.push(Infinity); //use disc to track if visited 
    }

    //DFS
    function dfs(u, pre) {
        disc[u] = low[u] = time++; //discover u
        for (const v of graph[u]) {
            if (v === pre) continue; //if parent vertex, ignore
            if (disc[v] === Infinity) { //if not discovered
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);
                if (low[v] > disc[u]) {
                    // u - v is critical, there is no path for v to reach 
                    // back to u or previous vertices of u
                    result.push([u,v]);
                }
            } else {
                //if v discovered and is not parent of u,
                //update lowlink value of u. cannot use low[v] bcs u is not a subtree
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }
    dfs(0, -1);
    return result;
}
