// recursion - function can be expressed in terms of itself
// multiply(arr, n) [product of array elements up to element n] 
// == mutiply(arr, n-1)[multiplies elements of array from index 0 to index 'n-2'] * arr[n-1] [last element of the intended scope]
// the trick to understanding recursion is to understand that once we enter the recursive call, 
// we exit it once we arrive the base case and the code execution is continued
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    }

    // the base case prevents infinite execution of the recursive function
    else {
        return sum(arr, n-1) + arr[n-1];
    }
}

let nums = [2,3,4,5];

console.log(sum(nums, 3));