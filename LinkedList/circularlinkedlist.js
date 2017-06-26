function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
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
  while(!(currNode.next == null) && !(currNode.next.element == "head")) {
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

var cities = new LList();
cities.insert("Chennai", "head");
cities.insert("Vijayawada", "Chennai");
cities.insert("Bangalore", "Vijayawada");
cities.insert("Hyderabad","Bangalore");
cities.display();
//cities.remove("Hyderabad");
console.log();
cities.display();
