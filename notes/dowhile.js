// do while nesures that code inside a loop runs at least once

const myArray = [];
let i = 10;

// the loop is set such that it iterates at least once
do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(myArray);