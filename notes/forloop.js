// declared with three optional expressions seperated by semicolons
// for (a; b; c), where a is the initialization, b is the condition, c is the final expression
// initialization is executed one time before loop starts
// condition is evaluated at beginning of every loop iteration as long as it evaluates to true else stops
// the final expr usually used to increment or decrement your loop counter

const myArray = [];

for  (let i=1; i<6; i++) {
    myArray.push(i);
}

console.log(myArray);

// odd number for loop
const oddArray = [];

for (let i=1; i<=9; i+=2) {
    oddArray.push(i);
}

console.log(oddArray);