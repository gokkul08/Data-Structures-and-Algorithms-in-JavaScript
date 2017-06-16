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
function isPalindrome(word) {
  var s = new Stack();
  for(var i = 0; i < word.length ; i++) {
    s.push(word[i]);
  }
  var reverse = "";
  while(s.length() > 0) {
    reverse += s.pop();
  }
  if(word == reverse) {
    return true;
  }
  else {
    return false;
  }
}

var word = "malayalam";
if(isPalindrome(word)) {
  console.log(word + ' is a palindrome');
}
else {
  console.log(word + ' is not a palindrome');
}
