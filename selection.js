

const array = [7,5,4,1,0,8,2];
// Time complexity Best, avg and worst O(n^2) and space compexity O(1)


function selectionSort(array){
    let length = array.length;
    for(let i = 0 ; i< length ;i++) {
        let min = i;
        let temp = array[i];

        for (let j = i + 1 ; j < length; j ++){
            if (array[j] < array[min]){
                min = j
            }
        }

        array[i] = array[min];
        array[min] = temp
    }
    return array;
}


selectionSort(array);
console.log(array);