//Queue Template
function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  var priority = this.dataStore[0].code;
  for(var i = 0; i < this.dataStore.length; ++i) {
    if(this.dataStore[i].code < priority) {
      priority = i;
    }
  }
  console.log("priority: " + priority);
  return this.dataStore.splice(priority, 1);
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  var retStr = "";
  for(var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code  + "\n";
  }
  return retStr;
}

function empty() {
  if(this.dataStore.length == 0) {
    return true;
  }
  else {
    return false;
  }
}

function count() {
  return this.dataStore.length;
}

//Program Logic Starts

function Patient(name, code) {
  this.name = name;
  this.code = code;
}

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Jack", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Dan", 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting: ");
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting: ");
console.log(ed.toString());
