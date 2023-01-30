// for '&&', this tests to see whether both operands to L and R are true hence return true
// this operator saves the bulk of code that comes with nestedifs
function testLogicalAND(val) {
    if (val <= 50 && val >=25) {
        return 'Yes';
    }
    return 'No';
}
console.log(testLogicalAND(27));