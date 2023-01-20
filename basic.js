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