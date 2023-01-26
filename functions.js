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

console.log(timesFive(5));

/* variables defined outside a function have a global scope (seen wherever in JS code)
vars declared without let or const are created in global scope by default
Therefore, one should always use let or const in variable naming */
//instance of global scope use cases
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5; // this assumes the characteristics of a global variable
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();