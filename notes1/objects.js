// instance of a js object
const myDog = {
    'name': 'Hugo',
    'legs': 4,
    'tails': 1,
    'friends': ['man', 'cats']
    
};

console.log(myDog)

// differences between dot & bracket notations 
// bracket - dynamic keys (key is evaluated from expression), dot - static keys (key is typed directly)

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

//updating object properties
myDog.friends = ['man', 'cats', 'dragons']; //you may also use bracket notation for this
console.log(myDog.friends);

//adding properties to objects
myDog.sound = 'Bark'; // you may also use bracket notation for this
console.log(myDog);

//deletion of properties from objects
delete myDog.tails;
console.log(myDog);

