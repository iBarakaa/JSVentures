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