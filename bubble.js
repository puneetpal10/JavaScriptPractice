

const array = [7,5,4,1,0,8,2];


function bubbleSort(array){
    const length = array.length

    for (let i = 0 ; i < length; i++){
        for (j = 0; j < length; j++){
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

bubbleSort(array);
console.log(array);