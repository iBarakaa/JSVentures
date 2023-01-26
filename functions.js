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

//variables declared within a function are local variables and only visible within that function
//instance of tests for local variables
/*function myLocalScope() {
    let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  console.log('outside myLocalScope', myVar); */
  //uncomment the above code block to run local var tests

//local variables take precedence over global vars in case of similar naming
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = 'sweater'; //sweater overrides tshirt
  return outerWear;
}

console.log(myOutfit());

//undefined values returned from a function
let sum = 0;

function addFive() {
    sum = sum + 5;
}
addFive();

//assignment of a returned value to variable
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed);