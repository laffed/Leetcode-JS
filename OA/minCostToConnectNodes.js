/*
Amazon | OA 2019 | Min Cost to Connect All Nodes

Given an undirected graph with n nodes labeled 1..n. Some of the nodes are already connected. The i-th edge connects nodes edges[i][0] and edges[i][1] together. Your task is to augment this set of edges with additional edges to connect all the nodes. Find the minimum cost to add new edges between the nodes such that all the nodes are accessible from each other.

Input:
n, an int representing the total number of nodes.
edges, a list of integer pair representing the nodes already connected by an edge.
newEdges, a list where each element is a triplet representing the pair of nodes between which an edge can be added and the cost of addition, respectively (e.g. [1, 2, 5] means to add an edge between node 1 and 2, the cost would be 5).

Example 1:
Input: n = 6, edges = [[1, 4], [4, 5], [2, 3]], newEdges = [[1, 2, 5], [1, 3, 10], [1, 6, 2], [5, 6, 5]]
Output: 7
Explanation:
There are 3 connected components [1, 4, 5], [2, 3] and [6].
We can connect these components into a single component by connecting node 1 to node 2 and node 1 to node 6 at a minimum cost of 5 + 2 = 7.
*/

/*
Minimum Spanning Tree using Kruskal's, union-find, and path compression. 
Add initially connected nodes, then process options as usual. 
Time Complexity: O(ElogE) or O(ElogV). Sorting of edges takes O(ELogE) time. After sorting, we iterate through all edges and apply find-union algorithm. The find and union operations can take atmost O(LogV) time. So overall complexity is O(ELogE + ELogV) time. The value of E can be atmost O(V2), so O(LogV) are O(LogE) same. Therefore, overall time complexity is O(ElogE) or O(ElogV)
*/

function minCostToConnectAllNodes(n, edges, newEdges) {
    //current number of unconnected nodes
    let N = n;
    let result = 0;

    //roots array
    let parent = [];
    for (let i = 0; i < n; i++) {
        parent.push(i);
    }

    function union(u, v) {
        let p1 = find(u);
        let p2 = find(v);

        if (p1 !== p2) {
            parent[p1] = p2;
            N -= 1;
        }
    }

    function find(u) {
        if (u === parent[u]) return u;
        
        //path compression
        return parent[u] = find(parent[u]);
    }

    for (const [u, v] of edges) {
        union(u, v);
    }

    //sort by increasing cost
    newEdges.sort((a,b) => a[2] - b[2]);

    for (const [u, v, cost] of newEdges) {
        if (find(u) !== find(v)) {
            union(u, v);
            result += cost;
        }
    }
    return n === 1 ? result : -1;
}
