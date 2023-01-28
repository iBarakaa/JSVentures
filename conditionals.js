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