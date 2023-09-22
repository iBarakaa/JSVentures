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

//inequality operator tests
function testNotEqual(val) {
    if (val != 99) { //this can also be substituted with !== for strict operations
        return 'Not Equal';
    }
    return 'Equal';
}
console.log(testNotEqual(10));

//> < operators
function greaterThan(val) {
    if (val > 100) {
        return 'Greater than 100';
    }
    if (val > 10) { //in the event we use >=, this includes the value of 10 itself
        return 'Greater than 10';
    }
    return '10 or less';
}
console.log(greaterThan(11));
//notice than if statements check code systematically hence order matters

//if else statements
function testElse(val) {
    let result = '';

    if (val > 5){
        result = 'Bigger than 5';
    } else {
        result = '5 or smaller';
    }

    return result;
}

console.log(testElse(10));

// else if statements for multiple conditions
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }else if (val < 5) {
      return "Smaller than 5";
    }else {
      return "Between 5 and 10";
    }
  }
  
console.log(testElseIf(7));

//code for chained else if statements
function testSize(num) {
    if (num < 5) {
      return 'Tiny';
    } else if (num < 10) {
      return 'Small';
    } else if (num < 15) {
      return 'Medium';
    } else if (num < 20) {
      return 'Large';
    } else if (num >= 20) {
      return 'Huge';
    } 
  }
  
  console.log(testSize(19));