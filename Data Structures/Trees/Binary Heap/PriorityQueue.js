// WHAT IS A PRIORITY QUEUE?

//Abstract data structure
// A data structure where each element has a priority.
// Elements with higher priorities are served before elements with lower priorities.

// A NAIVE VERSION

// priority: 1

// priority: 2

// priority: 3

// priority: 4

// priority: 5

// Use a list to store all elements

// Iterate over the entire thing to find the highest priority element.

// Write a Min Binary Heap - lower number means higher priority.
// Each Node has a val and a priority.  Use the priority to build the heap.
// Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
// Dequeue method removes root element, returns it, and rearranges heap using priority.

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
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
      if (element.priority <= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
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
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
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
let ER = new PriorityQueue();
ER.enqueue("Fever", 1);
ER.enqueue("Gunshot wounded", 5);
ER.enqueue("Headache", 2);
ER.enqueue("Broken arm", 4);
ER.enqueue("Glass in foot", 3);
