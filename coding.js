
//find first repeating charatcer
const input = ['2', '1', '2', '5', '6', '3', '2', '5'];

function findRepeatingCharWith(input) {
    for (let i = 0; i < input.length; i++) {
        for (j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return [input[i]]
            }
        }
    }
}// O(n^2)

function findRepeatingCharWithSet(input) {
    let map = {}
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i
        }
    }
    console.log(map);
    return undefined;
}//O(n)



//console.log(findRepeatingCharWith(input));

console.log(findRepeatingCharWithSet([2, 5, 1, 2, 3, 5, 1, 2, 4]));




//Find commom items in given below array

const arr1 = ["a", "b", "c", "d"];
const arr2 = ['a', "l", "g"];


function findCommonItem(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true
            }
        }
    }
    return false
}




function findCommonItemTWO(arr1, arr2) {
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }
    }
    return false
}



console.log(findCommonItemTWO(arr1, arr2));