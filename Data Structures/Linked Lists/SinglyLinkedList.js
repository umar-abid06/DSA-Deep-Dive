// What is a linked list?
// A data structure that contains a head, tail and length property.

// Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

//Node -- Keeps A piece of data and the reference to the next value.

// Big O
// of Singly Linked Lists
// Insertion -   O(1)

// Removal -   It depends.... O(1) or O(N)

// Searching -   O(N)

// Access -   O(N)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Pushing
  // Adding a new node to the end of the Linked List!
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //     Popping
  // Removing a node from the end of the Linked List!
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // Shifting
  // Removing a new node from the beginning of the Linked List!
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // Unshifting
  // Adding a new node to the beginning of the Linked List!
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Get
  // Retrieving a node by it's position in the Linked List!
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // Set
  // Changing the value of a node based on it's position in the Linked List
  set(index, val) {
    var foundNode = get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // Insert
  // Adding a node to the Linked List at a specific position
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // Remove
  // Removing a node from the Linked List at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return !!this.shift();

    var prev = this.get(index - 1);
    var removed = prev.next;
    pre.next = removed.next;
    this.length--;
    return removed;
  }
  //     REVERSE
  // Reversing the Linked List
  // in place!
  //Very Important Question in Interviews!
  //Classical interview question
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var prev = null;
    var next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  // Just to see in an array form
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
var list = new SinglyLinkedList();
// list.push(001);
// list.push(002);
// list.push(003);
