function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  return this.dataStore[this.top++] = element;;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}

//Program Starts
function fact(n) {
  var s = new Stack();
  while(n>1) {
    s.push(n--);
  }
  var product = 1;
  while(s.length() > 0) {
    product *= s.pop();
  }
  return product;
}
var n = 5;
var answer = fact(n);
console.log('Factorial of ' + n + ' is ' + answer);
