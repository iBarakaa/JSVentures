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

// odd number reverse push 

const roddArray = [];

for (let i=9; i>=1; i-=2) {
    roddArray.push(i);
}

console.log(roddArray);

// adding elements of an array to variable
const totalArray = [2,3,4,5,6];
let total = 0;

// i stands as zero because arrays are zero indexed (start at 0)
for (let i = 0; i < totalArray.length; i++) {
    total = total + totalArray[i];
}

console.log(total);

// nesting for loops
// multiplicationn of all numbers in sub-arrays

function multiplyAll(arr) {
    let product = 1;

    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    return product;
}

console.log(multiplyAll([[1,2], [3,4], [5,6,7],]));
