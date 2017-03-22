//Aggregate Array Operations
//Shallow Copy
var array1 = [];
for (var i = 0; i < 10; i++) {
    array1[i] = i+1;
    }
var array2 = array1;
console.log(array1[0]);
array1[0] = 200;
console.log(array2[0]);

//Deep Copy
var array3 = [];
for(var i = 0; i < array1.length; i++){
    array3[i] = array1[i];
}
array1[2] = 100;
console.log(array1[2]);
console.log(array3[2]);

//Accessor Functions
//Searching for a value
var names = ["abc", "def", "ghi", "jkl", "mno", "abc", "pqr"];
var position = names.indexOf("abc");
var position1 = names.lastIndexOf("abc");
console.log(position +" " + position1);
//String representation of the array

var namesString = names.toString();
var namesString1 = names.join('+');
console.log(namesString);
console.log(namesString1);

var names1 = ["abcd", "efgh", "ijkl"];
var joinedArray = names.concat(names1);
console.log(joinedArray);
var joinedArray1 = names1.concat(names);
console.log(joinedArray1);
var splicedArray = joinedArray.splice(5, 2);
console.log(splicedArray);
console.log(joinedArray);