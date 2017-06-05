/* Tree Data Structure */

function Node(data, left, right) {
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
	this.remove = remove;
	this.removeNode = removeNode;
	this.getSmallest = getSmallest;
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
while (!(current.left == null)) {
          current = current.left;
       }
return current.data;
}

function getMax() {
var current = this.root;
while (!(current.right == null)) {
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
   if (node.left == null) {
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
   if (node == null) {
      return null;
   }
   if (data == node.data) {
      // node has no children
      if (node.left == null && node.right == null) {
         return null;
      }
      // node has no left child
      if (node.left == null) {
         return node.right;
      }
      // node has no right child
      if (node.right == null) {
         return node.left;
      }
      // node has two children
      var tempNode = getSmallest(node.right);
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
      return node;
   }
   else if (data < node.data) {
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
console.log("Inorder Traversal: ");
inOrder(nums.root);
console.log("Preorder Traversal: ");
preOrder(nums.root);
console.log("Postorder Traversal: ");
postOrder(nums.root);
var min = nums.getMin();
console.log("Minimum Value " + min);
var max = nums.getMax();
console.log("Maximum Value " + max);
//Setting Input
//import readline module
var readline = require('readline');
// I think this is the part that allows the commandline interaction
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// this prompts the user and assigns the user input to the variable name
rl.question("Enter the number to find in the tree: ", function(number) {
  var found1 = nums.find(number);
  if (found1 != null) {
    console.log("Found " + number + " in the BST" );
  }
  else {
    console.log(number + " not found in BST");
  }
  //this closes the I/O stream, without this line the commandline prompt will remain open
  rl.close();
});
