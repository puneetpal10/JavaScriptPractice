
const array = [-2, -3, 4, -1, -2, 1, 5, -3];


function maxSumSubArray(array) {
    let maxSum = 0;
    let currSum = 0;

    for (let i = 0; i < array.length; i++) {

        currSum = currSum + array[i];
        if (currSum > maxSum) {
            maxSum = currSum;
        }
        if (currSum < 0){
            currSum = 0
        }
    }
    return maxSum;
}

console.log(maxSumSubArray(array));