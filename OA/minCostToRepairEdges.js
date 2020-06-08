/*
There's an undirected connected graph with n nodes labeled 1..n. But some of the edges has been broken disconnecting the graph. Find the minimum cost to repair the edges so that all the nodes are once again accessible from each other.

Input:

n, an int representing the total number of nodes.
edges, a list of integer pair representing the nodes connected by an edge.
edgesToRepair, a list where each element is a triplet representing the pair of nodes between which an edge is currently broken and the cost of repearing that edge, respectively (e.g. [1, 2, 12] means to repear an edge between nodes 1 and 2, the cost would be 12).
Example 1:

Input: n = 5, edges = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], edgesToRepair = [[1, 2, 12], [3, 4, 30], [1, 5, 8]]
Output: 20
Explanation:
There are 3 connected components due to broken edges: [1], [2, 3] and [4, 5].
We can connect these components into a single component by repearing the edges between nodes 1 and 2, and nodes 1 and 5 at a minimum cost 12 + 8 = 20.
Example 2:

Input: n = 6, edges = [[1, 2], [2, 3], [4, 5], [3, 5], [1, 6], [2, 4]], edgesToRepair = [[1, 6, 410], [2, 4, 800]]
Output: 410
Example 3:

Input: n = 6, edges = [[1, 2], [2, 3], [4, 5], [5, 6], [1, 5], [2, 4], [3, 4]], edgesToRepair = [[1, 5, 110], [2, 4, 84], [3, 4, 79]]
Output: 79

Idea: Min spanning tree but some edges will exist in the edges to repair list. The lists on not exclusive. 
*/

function minCostToRepair(n, edges, edgesToRepair) {
    let N = n;
    let result = 0;

    const parents = [];
    for (let i = 0; i < n; i++) {
        parents.push(i);
    }
    
    function union(u, v) {
        const p1 = find(u);
        const p2 = find(v);

        if (p1 !== p2) {
            parents[p1] = p2;
            N -= 1;
        }
    }

    function find(u) {
        if (u === parents[u]) return u;
        return parents[u] = find(parents[u]);
    }

    function isSameEdge(edge1, edge2) {
        let [u1, v1] = edge1;
        let [u2, v2] = edge2;

        return u1 === u2 && v1 === v2;
    }

    function needsRepair(edge) {
        for (let node of edgesToRepair) {
            if (isSameEdge(edge, node)) return true;
        }        
        return false;
    }

    for (const edge of edges) {
        if (!needsRepair(edge)) {
            let [u,v] = edge;
            union(u,v);
        }
    }

    edgesToRepair.sort((a,b) => a[2] - b[2]);

    for (const [u, v, cost] of edgesToRepair) {
        if (find(u) !== find(v)) {
            union(u, v);
            result += cost;
        }
    }
    return N === 1 ? result : -1;
}

let n = 5
let edges = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]
let edgesToRepair = [[1, 2, 12], [3, 4, 30], [1, 5, 8]]
console.log(minCostToRepair(n, edges, edgesToRepair));
