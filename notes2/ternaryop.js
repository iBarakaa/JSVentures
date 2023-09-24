// the ternary operator, conditional operator, can be used as a one line if-else 
// a ? b : c
// a - condition, b- code to run when true, c - code to run when false
// best practice to indent the operation on the conditions aspects

function checkEqual(a, b) {
    return a === b ? "Equal" 
    : 'Not Equal';
}

console.log(checkEqual(1,2));

// multiple ternary ops
function checkSign(num) {
    return (num === 0) ? "zero"
    : (num > 0) ? "positive"
    : "negative";
}

console.log(checkSign(10));