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
  return this.dataStore.shift();
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
    retStr += this.dataStore[i] + "\n";
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

function Dancers(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(males, females) {
  var names = ['F Allison McMillan','M Frank Opitz','F Mason McMillan','F Clayton Ruff','F Cheryl Ferenback','M Raymond Williams','F Jennifer Ingram','M Bryan Frazer','M David Durr','M Danny Martin','F Aurora Adney'];
  for(var i = 0; i < names.length; ++i) {
    names[i] = names[i].trim();
  }
  for(var i = 0; i < names.length; ++i) {
    var dancer = names[i].split(" ");
    var sex = dancer[0];
    var name = dancer[1] + " " + dancer[2];
    if(sex == 'F') {
      femaleDancers.enqueue(new Dancers(name, sex));
    }
    else {
      maleDancers.enqueue(new Dancers(name, sex));
    }
  }
}

function dance(males, females) {
  console.log('The dance partners are: ');
  while(!maleDancers.empty() && !femaleDancers.empty()) {
    person = femaleDancers.dequeue();
    console.log('Female Dancer is: ' + person.name);
    person = maleDancers.dequeue();
    console.log('Male Dancer is: '+ person.name);
    console.log("\n");
  }
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if(!femaleDancers.empty()) {
  console.log(femaleDancers.front().name + ' needs a partner');
}
if(!maleDancers.empty()) {
  console.log(maleDancers.front().name + ' needs a partner');
}

if(femaleDancers.count() > 0) {
  console.log(femaleDancers.count() + ' females still need a partner');
}

if(maleDancers.count() > 0) {
  console.log(maleDancers.count() + ' males still need a partner');
}
