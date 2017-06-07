function prArray(arr) {
  console.log(arr[0].toString() + ' ');
  for(var i = 1; i < arr.length; ++i) {
    console.log(arr[i].toString()+ ' ');
    if(i%10 == 0) {
      console.log("\n");
    }
  }
}

function genArray(length) {
  var arr = [];
  for(var i =0; i < length; ++i) {
    arr[i] = Math.floor(Math.random() * 101);
  }
  return arr;
}

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
  this.count = 1;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.preOrder = preOrder;
  this.inOrder = inOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
  this.removeNode = removeNode;
  this.update = update;
}

function insert(data) {
  var node = new Node(data, null, null);
  if(this.root == null) {
    this.root = node;
  }
  else {
    var current = this.root;
    var parent;
    while(true) {
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

function preOrder(node) {
  if(!(node == null)) {
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}

function inOrder(node) {
  if(!(node == null)) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
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
    if(data<current.data) {
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

function remove(data) {
  return removeNode(this.root, data);
}

function removeNode(node, data) {
  if(node == null) {
    return null;
  }
  if(node.data == data) {
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

function update(data) {
  var grade = this.find(data);
  grade.count++;
  return grade;
}

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
gradedistro.insert(grades);
for(var i = 0; i < grades.length; ++i) {
  var g = grades[i];
  var grade = gradedistro.find(g);
  if(grade == null) {
    gradedistro.insert(g);
  }
  else {
    gradedistro.update(g);
  }
}

//Setting Input
//import readline module
var readline = require('readline');
// I think this is the part that allows the commandline interaction
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var readContinuous = function() {
rl.question("\n Look at a grade: y/n ", function(ans) {
if(ans == 'n') {
  return rl.close();
}

rl.question("\nEnter a Grade: ", function(g) {
  var aGrade = gradedistro.find(g);
  if (aGrade == null) {
      console.log("No occurrences of " + g);
   }
  else {
    console.log("Occurrences of " + g + ": " + aGrade.count);
   }
   readContinuous();
 });

  });
};

readContinuous();
