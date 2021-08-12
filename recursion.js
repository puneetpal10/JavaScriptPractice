


// Find factorial of any number.

// Using loops


function findFactorial(number){

    let answer = 1;

    for (let i = 1; i<= number; i++)
    {
        answer = answer * i
    }
    return answer;

}

// console.log(findFactorial(3));


function findfactorialRecursive(number){
    if (number === 2){
        return 2;
    }
    return number * findfactorialRecursive(number-1);
}

console.log(findfactorialRecursive(5));
