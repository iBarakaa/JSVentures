// do while nesures that code inside a loop runs at least once

const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(myArray);