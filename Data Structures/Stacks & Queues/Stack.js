// WHAT IS A STACK?
// A LIFO data structure!

// The last element added to the stack will be the first element removed from the stack

// BIG O of STACKS
// Insertion -   O(1)

// Removal -   O(1)

// Searching -   O(N)

// Access -   O(N)

//IMPLEMENTATION OF A STACK USING ARRAY:
// let stack = [];
// stack.push("Umar");
// stack.pop()

//IMPLEMENTATION OF A STACK USING LINKED-LIST:

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // PUSHING
  // Add a value to the top of the stack!
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  // POP
  // Remove a value from the top of the stack!
  pop() {
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

var mystack = new Stack();

// RECAP
// Stacks are a LIFO data structure where the last value in is always the first one out.
// Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
// They are not a built in data structure in JavaScript, but are relatively simple to implement
// Insert and remove are both O(1)
