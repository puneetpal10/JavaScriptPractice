
// const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// function insertionSort(arr) {
//     let length = arr.length;
//     for (let i = 0; i < length; i++) {

//         if (arr[i] < arr[0]) {
//             //Move number to the first position
//             /**
//              * unshift
//              Elements to insert at the start of the array.


// Inserts new elements at the start of an array, and returns the new length of the array.


//              */

// //shift it deleted first index element
// //unshift it insert first index element
//             arr.unshift()
//             arr.unshift(arr.splice(i, 1)[0])
//         } else {

//             for (let j = 1; j<i ; j++){
//                 //find where number should go...

//             }
//         }
//     }
// }



// function insertionSort(array) {
//   const length = array.length;
// 	for (let i = 1; i < length; i++) {
// 		if (array[i] < array[0]) {
//       //move number to the first position
//       array.unshift(array.splice(i,1)[0]);
//     } else {
//       // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
//       if (array[i] < array[i-1]) {
//         //find where number should go
//         for (var j = 1; j < i; j++) {
//           if (array[i] >= array[j-1] && array[i] < array[j]) {
//             //move number to the right spot
//             array.splice(j,0,array.splice(i,1)[0]);
//           }
//         }
//       }
//     }
// 	}
// }

// insertionSort(array);
// console.log(array)


const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const array = [2,0,4,9,14,7];

function insertionSort(array) {
    for (let i = 1 ; i< array.length; i++){
        let curr = array[i];
        let j = i - 1;


        while( j >= 0 && array[j] > curr){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = curr;
    }
    return array;
}

insertionSort(array);
console.log(array)
