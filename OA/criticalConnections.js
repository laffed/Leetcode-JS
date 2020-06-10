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
//Time O(V + E) Space O(V)

function critical(n, connections) {
    //adj list
    const graph = [];
    for (let i = 0; i < n; i++) {
        graph.push([]);
    }

    for (const [u,v] of connections) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const result = [];
    let id = 0;
    const ids = [];
    const lowLink = [];
    for (let i = 0; i < n; i++) {
        ids[i] = Infinity;
    }

    //at: node that we are at, prev: previous node, to: node going to
    function dfs(at, prev) {
        ids[at] = lowLink[at] = id;
        id += 1;

        for (let to of graph[at]) {
            if (to === prev) continue;
            if (ids[to] === Infinity) {
                dfs(to, at);
                //after visiting and coming back to this callstack, update lowlink value with just visited value
                lowLink[at] = Math.min(lowLink[at], lowLink[to]);
                if (lowLink[to] > ids[at]) {
                    //we did not update our low link value from the recently visited node, and this connections to - at is critical
                    result.push([at, to]);
                }

            } else {
                //going to node is not the previous node but has been visited before. update lowlink value
                lowLink[at] = Math.min(lowLink[at], ids[to]);
            }
        }
    }
    dfs(0, -1);
    return result;
}
