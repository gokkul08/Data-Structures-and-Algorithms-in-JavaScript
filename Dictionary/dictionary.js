function Dictionary() {
  this.datastore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

function add(key, value) {
  this.datastore[key] = value;
}

function find(key) {
  return this.datastore[key];
}

function remove(key) {
  delete this.datastore[key];
}

function showAll() {
  this.datastore = Object.keys(this.datastore).sort();
  for(var key in this.datastore) {
    console.log(key + " -> " + this.datastore[key]);
  }
}

function count() {
  var n = 0;
  for(var key in this.datastore) {
    n++;
  }
  return n;
}

function clear() {
  for(var key in this.datastore) {
    delete this.datastore[key];
  }
}

var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
pbook.showAll();
console.log("Number of Entries: " + pbook.count());
pbook.clear();
console.log("Number of Entries: " + pbook.count());
