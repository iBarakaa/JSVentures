//simple instance of an array
const array = ['I am number', '4'];
console.log(array);

//multidimensional array
const mArray = [['Manchester City', 'Arsenal'],['Real Madrid','Barcelona']];
console.log(mArray);

//for array indexes instead of fetching character location, it fetches the entry in entirity
const iarray = [50, 60, 70];
const myData = iarray[0];
console.log(myData);
//array entries are mutable and can be changed freely unlinke Strings
const myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

//working with multidimensional arrays 
//changing position of muArray[0][0] to 8?
const muArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const muData = muArray[2][1];
console.log(muData);

//the following functions work in a stack basis
//push functions add entries into the end of the array
const pArray = [["John", 23], ['cat', 2]];
pArray.push(['dog', 3]);
console.log(pArray);

//pop functions remove the last elements in an array
const delEntry = pArray.pop();
console.log(delEntry); //displays entry to be popped
console.log(pArray);

//shift function removes the first elements in an array 
const delFirstEntry = pArray.shift();
console.log(delFirstEntry); 
console.log(pArray);

//unshift function adds to the front of the array
const addFirstEntry = pArray.unshift(['Paul', 35]);
console.log(pArray);

//function of queue in array
function nextInLine(arr, item) {
  arr.push(item); 
  let removedItem = arr.shift();
  return removedItem; 
}

// test instance
let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));