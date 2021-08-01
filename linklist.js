

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }

class LinkList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {

        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }


    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
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
            next: null
        };

        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
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
}



const myLL = new LinkList(10);
myLL.append(5);
myLL.append(15);
myLL.prepend(1);
// console.log(myLL);


myLL.insert(2,199);
myLL.insert(4,299);

console.log(myLL.printList());
