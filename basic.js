// javascript has 8 variables
/* the variables are as follows:
number,
bigint,
undefined - initial value of all variables. Upon math ops there is a result of NaN,
boolean, string, null, symbol, object */

var a = 9; //variable declaration and assignment
a++; // increments variables whereas -- 
var camelCase = "camelCaseOne is indeed JS best practise"; //this is an instance of camelCase in action as JS is case sensitive
console.log(a); //'npm install prompt-sync' allows entry 

let teacher = 9; //allows declaration once 
teacher = 10;

const MOTHER_NATURE = 'is the greatest' //best practise to name consts with Caps as they are immutable(unchanging)

const product = 12 * 12; 
const modulus = 11 % 3;
console.log(product, modulus);

let n = 5;
n += 10; //operator that merges assignment and arithmetic operations
console.log(n);

const quoteStr = "Hanibal Barca said \"Aut inveniam viam aut faciam\" which translated to \"I will either find a way or make one\"."; //how to place quotes within quotes
console.log(quoteStr);

/* escaping characters include: \' & \" - quotations, \\ - backslash itself, \n - newline, \t - tab.
\r - carriage return, \b - word boundary, \f - form feed */
const escapeStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(escapeStr);

//use of the concatenation operator
const conctStr = "This is the start. " + "This is the end.";
console.log(conctStr);
let conctStr2 = "This is the first. ";
conctStr2 += "This is the last.";
console.log(conctStr2);
const conctStr3 = "Isaac";
const conctStr4 = "My name is " + conctStr3 + ", and I am the greatest that is, was and will ever be.";
console.log(conctStr4);

//appending variables to Strings and finding the length of String Values
const someText = 'super duper fun';
let someString = 'Coding is ';
someString += someText;
console.log(someString);
console.log(someString.length);




