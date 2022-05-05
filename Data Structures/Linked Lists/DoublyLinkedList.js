// We know what lists are...
// but doubly?
// Almost identical to Singly Linked Lists,
// except every node has another pointer, to the previous node!

// Big O
// of Doubly Linked Lists
// Insertion -   O(1)

// Removal -   O(1)

// Searching -   O(N)

// Access -   O(N)

// Technically searching is O(N / 2), but that's still O(N)

//Node:
// --> val
// --> next
// --> prev
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
// DoublyLinkedList:
// --> head
// --> tail
// --> length

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //     PUSHING
  // Adding a node to the end of the Doubly Linked List
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // POPPING
  // Removing a node from the end of the Doubly Linked List
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  // SHIFTING
  // Removing a node from the beginning of the Doubly Linked List
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  // UNSHIFTING
  // Adding a node to the beginning of the Doubly Linked List
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // GET
  // Accessing a node in a Doubly Linked List by its position
  // We dont have to start from the begining always, we can start from the tail as well
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index <= this.length / 2) {
      var count = 0;
      var current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      var count = this.length - 1;
      var current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  // SET
  // Replacing the value of a node in a Doubly Linked List
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // INSERT
  // Adding a node in a Doubly Linked List by a certain position
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  // REMOVE
  // Removing a node in a Doubly Linked List by a certain position
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
  // Reverse
  // Reversing a Doubly Linked List in place!
}
let list = new DoublyLinkedList();
list.push("umar");
list.push("ammar");
list.push("affan");
