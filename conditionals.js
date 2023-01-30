//instance of conditional if statements in Js
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue == true) {
      return "Yes, that was true";
    }
    return 'No, that was false';
  }

//trueOrFalse(true); uncomment this line to run output for the code above

//js has type coercion which involves comparison of two datatypes converted to match
function testEquality(val) {
    if(val == 10) {
        return 'Equal';
    }
    return 'Inequivalent';
}
console.log(testEquality('10')); // Type Coercion instance

// '===' strict equalities do not perform type coercion
function testStrict(val) {
    if(val === '10') {
        return 'Equal';
    }
    return 'inequivalent'
}
console.log(testStrict(10));

//checking the type of values 
console.log(typeof 3);
console.log(typeof '3');


