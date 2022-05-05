// WHAT IS A QUEUE?
// A FIFO data structure!

// First In First Out

// How do we use them in programming?
// Background tasks
// Uploading resources
// Printing / Task processing

// BIG O of QUEUES
// Insertion -   O(1)

// Removal -   O(1)

// Searching -   O(N)

// Access -   O(N)

// IMPLEMENTING A QUEUE USING ARRAY:
// let queue = [];

// queue.push("Umar");
// queue.shift();

// queue.unshift("AMMAR");
// queue.pop()

// IMPLEMENTING A QUEUE USING LINKED-LIST:

// push and shift methods of singlyLinkedlists

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //     Enqueue
  // Adding to the beginning of the Queue!

  // Remember, queues are a FIFO data structure
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }
  //     Dequeue
  // Removing from the beginning of the Queue!

  // Remember, queues are a FIFO data structure
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
let q = new Queue();
// RECAP
// Queues are a FIFO data structure, all elements are first in first out.
// Queues are useful for processing tasks and are foundational for more complex data structures
// Insertion and Removal can be done in O(1)
