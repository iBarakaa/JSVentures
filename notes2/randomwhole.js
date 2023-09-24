// process of generating random whole numbers

function randomWholeNum() {
    // random number generation between 0 and 9
    //Math.floor() rounds down number to nearest whole  no. 
    return (Math.floor(Math.random() * 10));
}

console.log(randomWholeNum());

// random whole numbers within a range
// grouping operators '()' allow for precedence of evaluation of expressions
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

console.log(randomRange(15, 20));