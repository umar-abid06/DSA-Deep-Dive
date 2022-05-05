// Shortest Path Algorithms
// When working with weighted and directed/undirected graphs, we very commonly want to know how to get from one vertex to another! Better yet, how to do it quickly.

// What's the fastest way to get from point A to point B?

// Dijkstra's Algorithm
// WHAT IS IT
// One of the most famous and widely used algorithms around!

// Finds the shortest path between two vertices on a graph

// "What's the fastest way to get from point A to point B?"

// WHY IS IT USEFUL?
// GPS - finding fastest route
// Network Routing - finds open shortest path for data
// Biology - used to model the spread of viruses among humans
// Airline tickets - finding cheapest route to your destination
// Many other uses!

// Improving Dijkstra's
// Dijkstra's algorithm is greedy! That can cause problems!

// We can improve this algorithm by adding a heuristics (a best guess)

// Implementing using minBinaryHeap based PQ.... It will be faster
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = []; //To return at end

    //Build up the initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // As long as something to be visited
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        //We are done
        console.log(distances[finish]);
        // Build up path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighbouring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // Calculate new distances to neighboring nodes
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //Updating new smallestdistance to neighbors
            distances[nextNeighbor] = candidate;
            //Updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

var mygraph = new WeightedGraph();

mygraph.addVertex("A");
mygraph.addVertex("B");
mygraph.addVertex("C");
mygraph.addVertex("D");
mygraph.addVertex("E");
mygraph.addVertex("F");

mygraph.addEdge("A", "B", 4);
mygraph.addEdge("A", "C", 2);
mygraph.addEdge("B", "E", 3);
mygraph.addEdge("C", "D", 2);
mygraph.addEdge("C", "F", 4);
mygraph.addEdge("D", "E", 3);
mygraph.addEdge("D", "F", 1);
mygraph.addEdge("E", "F", 1);

mygraph.Dijkstra("A", "E");
