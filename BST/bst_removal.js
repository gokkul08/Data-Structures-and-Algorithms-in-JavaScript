function Node(data,left,right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.getSmallest = getSmallest;
  this.remove = remove;
  this.removeNode = removeNode;
}

function insert(data) {
  var node = new Node(data, null, null);
  if(this.root == null) {
    this.root = node;
  }
  else{
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if(data < current.data) {
        current = current.left;
        if(current == null) {
          parent.left = node;
          break;
        }
      }
      else {
        current = current.right;
        if(current == null) {
          parent.right = node;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if(!(node == null)) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
  }
}

function preOrder(node) {
  if(!(node == null)) {
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if(!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show());
  }
}

function getMin() {
  var current = this.root;
  while(!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

function getMax() {
  var current = this.root;
  while(!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  var current = this.root;
  while(current.data != data) {
    if(data < current.data) {
      current = current.left;
    }
    else if (data > current.data) {
      current = current.right;
    }
    if(current == null) {
      return null;
    }
  }
  return current;
}

function getSmallest(node) {
  if(node.left == null) {
    return node;
  }
  else {
      return getSmallest(node.left);
  }
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if(node == null) {
    return null;
  }
  if(data == node.data) {
    if(node.left == null && node.right == null) {
      return null;
    }
    if(node.right == null) {
      return node.left;
    }
    if(node.left == null) {
      return node.right;
    }
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  }
  else if(data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  }
  else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("InOrder Traversal");
inOrder(nums.root);
console.log("PreOrder Traversal");
preOrder(nums.root);
console.log("PostOrder Traversal");
postOrder(nums.root);
console.log("Smallest Value in the tree is: " + nums.getMin());
console.log("Largest Value in the tree is: " + nums.getMax());
console.log("Finding a value in the tree");
//Setting Input
//import readline module
var readline = require('readline');
// I think this is the part that allows the commandline interaction
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the number to delete in the tree: ", function(number) {
	nums.remove(number);
	preOrder(nums.root);
  //this closes the I/O stream, without this line the commandline prompt will remain open
  rl.close();
});
