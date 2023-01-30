//instance of a simple queue code block 
//function of queue in array
function nextInLine(arr, item) {
    arr.push(item); 
    let removedItem = arr.shift();
    return removedItem; 
  }
  
  // test instance
  let testArr = [1, 2, 3, 4, 5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));