function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
  this.count = 0;
	this.count1 = 0;
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
  this.counter = counter;
  this.c2a = c2a;
	this.findCount = findCount;
}

function insert(data) {
	var node = new Node(data, null, null);
	if(this.root == null) {
		this.root = node;
	}
	else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if(data < current.data) {
				current = current.left;
				if(current == null){
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
		console.log(node.show() + " ");
		inOrder(node.right);
	}
}

function preOrder(node) {
	if(!(node == null)) {
		console.log(node.show() + " ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

function postOrder(node) {
	if(!(node == null)) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + " ");
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
  while(current.data!=data) {
    if(data < current.data) {
      current = current.left;
    }
    else {
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

function remove(data){
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
    if(node.left == null) {
      return node.right;
    }
    if(node.right == null) {
      return node.left;
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

function findCount(node) {
	if(!(node == null)) {
		findCount(node.left);
		var nodeCounter = nums.find(node.show());
		nodeCounter.count1 ++;
		findCount(node.right);
	}
	if(nodeCounter == null) {
		return 0;
	}
	else {
	return nodeCounter;
}
}

var ca = [];

function c2a(node) {
  if(!(node == null)) {
    c2a(node.left);
    ca.push(node.show());
    c2a(node.right);
  }
}

function counter(data) {
  var occur = this.find(data);
  occur.count ++;
  return occur;
}



var nums = new BST();
nums.insert(99);
nums.insert(44);
nums.insert(45);
nums.insert(45);
nums.insert(99);
nums.insert(99);
nums.insert(99);
console.log("Inorder Traversal: ");
inOrder(nums.root);
console.log("Preorder Traversal: ");
preOrder(nums.root);
console.log("Postorder Traversal: ");
postOrder(nums.root);
var min = nums.getMin();
console.log("Minimum Value: " + min);
var max = nums.getMax();
console.log("Maximum Value: " + max);
console.log("Array Values");
c2a(nums.root);
console.log(ca);
for(var i = 0; i < ca.length; i++) {
  var g = ca[i];
  var grade = nums.find(g);
  if(grade == null) {
    return 0;
  }
  else {
    nums.counter(g);
  }
}
findCount(nums.root);
//Setting Input
//import readline module
var readline = require('readline');
// I think this is the part that allows the commandline interaction
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the number to find in the tree: ", function(number) {
  var found1 = nums.find(number);
  if (found1 != null) {
    console.log("Found " + number + " in the BST" );
    console.log(found1.count1);
  }
  else {
    console.log(number + " not found in BST");
		console.log(found1.count1);
  }
  //this closes the I/O stream, without this line the commandline prompt will remain open
  rl.close();
});
