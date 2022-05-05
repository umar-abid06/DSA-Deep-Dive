// WHAT ARE GRAPHS
// A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these
// vertices for an undirected graph or a set of ordered pairs for a directed graph.
//    Graph = Nodes + Connections
// USES FOR GRAPHS
// Social Networks
// Location / Mapping
// Routing Algorithms
// Visual Hierarchy
// File System Optimizations
// EVERYWHERE!

// Recommendations
// "People also watched"
// "You might also like..."
// "People you might know"
// "Frequently bought with"

// ESSENTIAL GRAPH TERMS
// Vertex - a node
// Edge - connection between nodes
// Weighted/Unweighted - values assigned to distances between vertices
// Directed/Undirected - directions assigned to distanced between vertices

// Two ways of Storing the graph:
// 1- Adjacnency Matrix.
// 2- Adjacency List

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] != v2 && this.adjacencyList[v2] != v1) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    } else {
      console.log("Dont enter again");
    }
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Kyoto");
g.addVertex("Shibuya");
g.addVertex("HongKong");

// Recap
// Graphs are collections of vertices connected by edges
// Graphs can be represented using adjacency lists, adjacency matrices and quite a few other forms.
// Graphs can contain weights and directions as well as cycles
// Just like trees, graphs can be traversed using BFS and DFS
// Shortest path algorithms like Dijkstra can be altered using a heuristic to achieve better results like those with A*
