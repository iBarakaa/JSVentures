/*regarded when we have many options to choose from
case values are tested with '===' */
function caseInSwitch(val) {
    let answer = "";
   
    switch (val) {
      case 1:
        answer = 'alpha';
        break;
      case 2:
        answer = 'beta';
        break;
      case 3:
        answer = 'gamma';
        break;
      case 4:
        answer = 'delta';
        break;
    }

    return answer;
  }
  
  console.log(caseInSwitch(1));

  //use of default in switch statements for scenarios cases do not account for
  function switchOfStuff(val) {
    let answer = "";
  
    switch (val) {
      case 'a':
        answer = 'apple';
        break;
      case 'b':
        answer = 'bird';
        break;
      case 'c':
        answer = 'cat';
        break;
      default:
        answer = 'stuff';
        break; //this is optional as it is the last line tbexecuted
    }
  
    return answer;
  }
  
  console.log(switchOfStuff(1));

  //if break statement is ommited, the following case statements are executed until break is encountered
  //multiple identical options instances
  function sequentialSizes(val) {
    let answer = "";
    
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Mid';
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High';
    
    }

    return answer;
  }
  
  console.log(sequentialSizes(5));

  