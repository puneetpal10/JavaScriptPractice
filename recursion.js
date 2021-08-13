


// Find factorial of any number.

// Using loops


function findFactorial(number) {

    let answer = 1;

    for (let i = 1; i <= number; i++) {
        answer = answer * i
    }
    return answer;

}

// console.log(findFactorial(3));


function findfactorialRecursive(number) {
    if (number === 2) {
        return 2;
    }
    return number * findfactorialRecursive(number - 1);
}

// console.log(findfactorialRecursive(5));




// Fibonacchi


function fibonacciRecursion(n) {
    if (n < 2) {
        return n;
    }

    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}


// console.log(fibonacciItrative(6));

function fibonacciIterative(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1]);
    }
   return arr[n];
  }
  console.log(fibonacciIterative(7));