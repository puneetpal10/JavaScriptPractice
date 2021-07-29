let user = {
    age:54,
    name:'pal',
    magic: true,
    scream: function(){
        console.log('called');
    }
}

user.age; //O(1)
user.spell = 'puneet';//O(1)


console.log(user);

user.scream();