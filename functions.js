//simple function illustration in js
function reusableFunction() {
    console.log('Hi World');
}

reusableFunction();

//introducing arguments into functions
function functionWithArgs(a , b) {
    let sum = a + b;
    console.log(sum);
}

functionWithArgs(10, 20);

//functions with return values
function timesFive(num) {
    return num * 5;
}

var x = 5;
timesFive(x);