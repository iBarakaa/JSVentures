// testing objects for properties in JS
const myDog = {
    'name': 'Hugo',
    'legs': 4,
    'tails': 1,
    'friends': ['man', 'cats']
    
};

function testObj(obj, objProp) {

    if (obj.hasOwnProperty(objProp) == true) {
        return obj[objProp]; // here, it is advised to use bracket notations
    }
    return 'Not Found';
}

console.log(testObj(myDog, 'color'));
console.log(testObj(myDog, 'name'));

