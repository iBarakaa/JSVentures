// for '&&', this tests to see whether both operands to L and R are true hence return true
// this operator saves the bulk of code that comes with nestedifs
function testLogicalAND(val) {
    if (val <= 50 && val >=25) {
        return 'Yes';
    }
    return 'No';
}
console.log(testLogicalAND(27));

// if either is true, we use || operator (OR operator)
//this function only returns yes to values btwn and including 10 and 20
function testLogicalOR(val) {
    if(val < 10 || val > 20) {
        return 'Outside';
    }
    return 'Inside';
}
console.log(testLogicalOR(15));