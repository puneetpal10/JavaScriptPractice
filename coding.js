
//find first repeating charatcer
const input = ['2','1','2', '5', '6', '3', '2', '5'];

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

console.log(findRepeatingCharWithSet([2,5,1,2,3,5,1,2,4]));

