/* Javascript has 8 variables
The variables are as follows:
number,
bigint,
undefined - initial value of all variables. Upon math ops there is a result of NaN,
boolean, string, null, symbol, object */

//Variable declaration
var a = 9; 
a++; // increments variables whereas -- is decrements
var camelCase = "camelCaseOne is indeed JS best practise"; //this is an instance of camelCase in action as JS is case sensitive
console.log(a); //'npm install prompt-sync' allows entry of data
//let allows singular declaration of a variable (Good practise for huge programs)
let teacher = 9; 
teacher = 10;
//const gives a property immutability
const MOTHER_NATURE = 'is the greatest' //best practise to name consts with Caps

const product = 12 * 12; 
const modulus = 11 % 3;
console.log(product, modulus);

//uses of operators
let n = 5;
n += 10; //Merges assignment and arithmetic operations
console.log(n);
//Placement of quotes within quotes
const quoteStr = "Hanibal Barca said \"Aut inveniam viam aut faciam\" which translated to \"I will either find a way or make one\"."; 
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

//Appending variables to Strings and finding the length of String Values
const someText = 'super duper fun';
let someString = 'Coding is ';
someString += someText;
console.log(someString);
console.log(someString.length);

//finding character positions in a String
/* note that most programming languages use 
Zero indexing (count begins from 0) */
const lastName = 'Baraka';
let firstPosition = lastName[0];
console.log(firstPosition);

//string immutability 
let bh = 'PHonor in the challenge';
/*bh[0] = 'P'; here, string immutability is at play
Understand however, that reassignment is possible */
bh = 'Pride in the victory';
console.log(bh);
//to get the position of the last character using bracket notation
const FIRST_NAME = 'Isaac';
let lastChar = FIRST_NAME[FIRST_NAME.length-1];
console.log(lastChar);

//challenge String construction
const myNoun = 'dragon';
const myAdjective = 'golden-grey';
const myVerb = 'flew';
const myAdverb = 'swiftly';

const sentence = "The "+myNoun+" clothed "+"in "+ myAdjective+" armor "+myVerb+" by "+myAdverb+".";
console.log(sentence);

