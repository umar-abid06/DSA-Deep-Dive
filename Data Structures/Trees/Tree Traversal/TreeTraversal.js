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
  //     TRAVERSING A TREE
  // Two ways:

  // Breadth-first Search
  // Depth-first Search

  // Lots of nodes to keep track of (means tree is wider)! Use Bread-first search, when tree is deep use Depth-first
  BFS() {
    var node = this.root,
      data = [],
      queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      // data.push(node);
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // Post and pre order can be used to clone or recreating the tree
  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  //In order gives the sorted form
  DFSInOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}
let mytree = new BinarySearchTree();
mytree.insert(6);
mytree.insert(16);
mytree.insert(26);
mytree.insert(3);
mytree.insert(5);
mytree.insert(8);

// BFS
// [6,3,16,5, 8,26]

// DFS PreOrder
// [6, 3,5,16,8,26]

// DFS PostOrder
// [5,3,8,26,16,6]

// DFS InOrder
// [3, 5, 6, 8, 16, 26]

// RECAP
// Trees are non-linear data structures that contain a root and child nodes
// Binary Trees can have values of any type, but at most two children for each parent
// Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
// We can search through Trees using BFS and DFS
