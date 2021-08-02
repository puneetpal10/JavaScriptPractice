

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }

class DoublyLinkList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {

        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }


    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;

        return this;

    }


    printList(){
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index,value){

        //check parameters

        //If enterd index is greater than this list, add that at the end of list.
        if (index >= this.length){
            this.append(value);
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        };

        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;

        this.length ++;
        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        //Make sure that deleted index must not be greater than the length

        //Find leader

        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();

    }


    reverse(){
        if (!this.head.next){
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;


        while(second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;

        return this;
    }
}



const myLL = new DoublyLinkList(10);
myLL.append(5);
myLL.append(15);
myLL.prepend(1);
// console.log(myLL);


// myLL.insert(2,199);
// myLL.insert(4,299);


// myLL.remove(2);

console.log(myLL);
console.log(myLL.printList());

myLL.reverse();
console.log(myLL.printList());

