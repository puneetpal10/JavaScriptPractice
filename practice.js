const strings = ['a','b','c','d'];
//4*4 = 16 bytes of storage


// console.log(strings[2]);


//push
strings.push('e') //O(1)
console.log(strings);


//pop

strings.pop(); //O(1) O off 1
console.log(strings);


//unshift

strings.unshift('x'); //O(n)
console.log(strings);


//splice
strings.splice(2,0, 'alien');

console.log(strings);
