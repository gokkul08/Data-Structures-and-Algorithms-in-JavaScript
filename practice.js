//import readline module
var readline = require('readline');
// I think this is the part that allows the commandline interaction
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];

// this prompts the user and assigns the user input to the variable name
rl.question("Enter a name to search for: ", function(name) {
  var position = names.indexOf(name);
  if (position >= 0) {
    console.log("Found " + name + " at position " + position);
  }
  else {
    console.log(name + " not found in array.");
  }
  //this closes the I/O stream, without this line the commandline prompt will remain open
  rl.close();
});
