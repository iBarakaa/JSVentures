//created below this code block is an instance of switch alternative
function ifSoln(val) {
    let answer = "";
  
    if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }
  
    return answer;
  }
  console.log(ifSoln(7));

  function chaintoSwitch(val) {
    let answer = '';

    switch(val) {
        case 'bob':
            answer = 'Marley';
            break;
        case 42:
            answer = 'The Answer';
            break;
        case 1:
            answer = 'There is no #1';
            break;
        case 99:
            answer = 'Missed me by this much!';
            break;
        case 7:
            answer = 'Ate Nine';

    }
    return answer;
  }

  console.log(chaintoSwitch(7)); //we known we are successful when both outputs match
  

