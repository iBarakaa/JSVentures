// contacts list
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// function declaration
// takes in first name and property and looks through the contact list
function lookUpProfile(name, prop) {
  
  for (let i = 0; i < contacts.length; i++) {
    if (name == contacts[i].firstName) {
      if (contacts[i].hasOwnProperty(prop) == true) {
        return contacts[i][prop];
      }
      else {
        return "No such property";
      }
    }

  }
  // catch all for instances where name isn't caught on contacts
  return "No such contact";

}

console.log(lookUpProfile("Akira", "likes"));

// use of in instead of hasProperty

function lookUpProfile2(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      // works similarly to hasProperty(), where in returns true if property is in object
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile2("Akira", "likes"));
