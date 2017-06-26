function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.reverse = reverse;
  this.dispReverse = dispReverse;

}

function find(item) {
  var currNode = this.head;
  while(!(currNode.element == item)){
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var current = this.find(item);
  var newNode = new Node(newElement);
  newNode.next = current.next;
  current.next = newNode;
}

function display() {
  var currNode = this.head;
  while(!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function findPrevious(item) {
  var currNode = this.head;
  while(!(currNode.next == null) && (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(element) {
  var prevNode = this.findPrevious(element);
  if(!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}

function reverse() {
  var current = this.head;
  var prev = null;
  var next;
  while(current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev;
}

function dispReverse() {
  var currNode = this.head;
  while(!(currNode == null) && !(currNode.element == "head")) {
    console.log(currNode.element);
    currNode = currNode.next;
  }
}

var cities = new LList();
cities.insert("Chennai", "head");
cities.insert("Vijayawada", "Chennai");
cities.insert("Bangalore", "Vijayawada");
cities.insert("Hyderabad","Bangalore");
cities.display();
cities.remove("Hyderabad");
console.log();
cities.display();
cities.reverse();
console.log();
cities.dispReverse();
