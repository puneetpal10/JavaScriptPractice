let user = {
    age: 54,
    name: 'pal',
    magic: true,
    scream: function () {
        //  console.log('called');
    }
}

user.age; //O(1)
user.spell = 'puneet';//O(1)


// console.log(user);

user.scream();


class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value]);
        return this.data
    }

    get(key){
        let address = this._hash(key);
        let currentBucket = this.data[address];

        console.log(currentBucket);
        if (currentBucket) {
            for(let i = 0; i<currentBucket.length; i++){
                if (currentBucket[i][0] === key){
                    return currentBucket[i][1] 
                }
            }

        }
        return undefined
        console.log(currentBucket);

    }
}


const myHashTable = new HashTable(50);
// myHashTable._hash("grapes");
myHashTable.set('grapes', 100);
myHashTable.set('apple', 54);
console.log(myHashTable);

console.log(myHashTable.get('apple'));

