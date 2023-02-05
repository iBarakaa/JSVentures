// you can use objects in place of switch and if-else statements
function phoneticSwitchLookup(val) {
    let result = "";
  
    switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }
  
    return result;
  }
  
  console.log(phoneticSwitchLookup('alpha'));

//   instance of function where switch statement is turned into an object
  function phoneticObjectLookup(val) {
    let result = ''
    const lookup = {
        'alpha': result = 'Adams',
        'bravo': result = 'Boston',
        'charlie': result = 'Chicago',
        'delta': result = 'Denver',
        'echo': result = 'Easy',
        'foxtrot': result = 'Frank'
    };
    result = lookup[val];
    return result;  
  }

  console.log(phoneticObjectLookup('alpha'));
  