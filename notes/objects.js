// instance of a js object
const myDog = {
    'name': 'Hugo',
    'legs': 4,
    'tails': 1,
    'friends': ['man', 'cats']
    
};

console.log(myDog)

// accessing object properties with dot notations
const dogName = myDog.name;
const dogFriends = myDog.friends;

console.log(dogName, dogFriends);

//accessing object properties with bracket notations
const dogLegs = myDog['legs'];
const dogTails = myDog['tails'];

console.log(dogLegs, dogTails); 

//accessing object properties with variables
const dog = 'name';
const dogNames = myDog[dog];
console.log(dogNames)