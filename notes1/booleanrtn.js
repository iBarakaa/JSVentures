// work flow of how to return boolean functions 
function findingOutIfLess(a,b) {
    return a < b; // saves bulk of coding if statement to return t/f values
}

console.log(findingOutIfLess(10,5)); 

/* we can return undefined values in two ways
1. return undefined;
2. return; */
// Instance of code where if a or b is less than 0, the function returns undefined
function abTest(a, b) {
    if (a < 0 || b < 0) {
      return; //or return undefined;
    }
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(abTest(-2,-2));