// A naive implementation of PriorityQueue using arrays, the more optimal one is with binary heaps.
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// Notice we are sorting which is O(N * log(N))

let PQ = new PriorityQueue();
