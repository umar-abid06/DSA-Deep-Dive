// WHAT IS A TREE?
// A data structure that consists of nodes in a parent / child relationship
// Trees - nonlinear
// Lots of different applications!

// HTML DOM
// Network Routing
// Abstract Syntax Tree
// Artificial Intelligence
// Folders in Operating Systems
// Computer File Systems

// BINARY TREES

// HOW BSTS WORK
// Every parent node has at most two children
// Every node to the left of a parent node is always less than the parent
// Every node to the right of a parent node is always greater than the parent
// Lots of different applications as well!

// Decision Trees (true / false)
// Database Indicies
// Sorting Algorithms

// Big O of BST
// Insertion - O(log n)

// Searching - O(log n)
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
      if (!found) return undefined;
    }
    return current;
  }
}
let mytree = new BinarySearchTree();
mytree.insert(6);
mytree.insert(16);
mytree.insert(26);
mytree.insert(3);
mytree.insert(5);
mytree.insert(8);
