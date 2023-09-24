//parseInt() - parses string and returns an integer
//if first character in string fails no. conversion it returns NaN

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("5T"));

// use of parseInt function with radix (the number of digits utilized in a positional number system before "rolling over" to the next digit's place)
//base 10 number system has a radix of 10
//radix can be an integer between 2 and 36

// specifically converts for base 2
function convertToInteger2(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger2("10011"));

// function that allows flexible convertion to specified base
function convertToInteger3(str, radix) {
    return parseInt(str, radix);
}

console.log(convertToInteger3("10011", 10));