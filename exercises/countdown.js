// note about recursion
// the recursive call starts from the first call to base case
// upon reaching base case, the calls start to return values
// the returns start from the base case return all the way to the first recursive call
function countdown(n){
    // base case - where n < 1 an empty is returned
    // this is because there are no more positive integers to countdown
    if (n < 1) {
      return [];
    } else {
        // recursive case - generates array of consecutive integers from 'n-1' to 1
        // result stored in the array available
      const arr = countdown(n-1);
      // after the recursive call, the current value of 'n' is added to beginning of array at start
      arr.unshift(n);
      return arr;
    }
  }

