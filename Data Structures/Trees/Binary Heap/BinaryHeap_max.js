// In a MaxBinaryHeap, parent nodes are always larger than child nodes.
// In a MinBinaryHeap, parent nodes are always smaller than child nodes

// MAX BINARY HEAP
// Each parent has at most two child nodes
// The value of each parent node is always greater than its child nodes
// In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

// Why do we need to know this?
// Binary Heaps are used to implement Priority Queues, which are very commonly used data structures

// They are also used quite a bit, with graph traversal algorithms

//For the min binary heap reverse all the inequalities
class MaxBinaryHeap {
  constructor() {
    // THERE'S AN EASY WAY OF STORING A BINARY HEAP...
    // A LIST/ARRAY

    // For any index of an array n...

    // The left child is stored at 2n + 1
    // The right child is at 2n + 2

    // For any child node at index  n...

    // Its parent is at index (n-1)/2 --> floored

    this.values = [];
  }
  //     INSERT PSEUDOCODE
  // Push the value into the values property on the heap
  // Bubble the value up to its correct spot!
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  //     Remove the root
  // Replace with the most recently added
  // Adjust (sink down)
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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
let heap = new MaxBinaryHeap();
heap.insert(55);
// [41,39,33, 18, 27, 12]
