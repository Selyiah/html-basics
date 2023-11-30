const myName = "Melissa"; 
console.log(myName); 

const myAge = 26; 
console.log(myAge);

const myFutureJob = 'Software Engineer';
console.log(myFutureJob);


const myInfo_concatenation = "My name is " + myName + ", I am " + myAge + " years old and I will soon become a " + myFutureJob + "."
console.log(myInfo_concatenation);

// concatenation 

const myInfo_interpolation = `My Name is ${myName}, I am ${myAge} years old and I will soon become a ${myFutureJob}`
console.log(myInfo_interpolation);

// interpolation 

// if/else statements 

let allergicToPrawns = true; // this can be changed to false to see the else statement in console 
if (allergicToPrawns == true) {
  console.log("Guess we're having breadsticks!");
}

else {
  console.log("Bring on the shellfish!");
}

// functions + if/else 

function whatsForDinner (allergy) {
    if (allergy == true) {
        return "Guess we're having breadsticks!";
    }

    else {
        return "Bring on the shellfish!";
    }
}

let dinner = whatsForDinner(false);

console.log(dinner);

// function in calculating an area 
function calcArea (width, height) {
    let result = width + height;
    console.log(result);
}

calcArea(5, 2);
calcArea(6, 3);

// objects & nested objects 

let girl = {
    name: 'Anne', // string
    age: 23, // integer
    friends: ['Susan', 'Marie', 'Jenny'], // array
    address: {
      //object 
      number: 123,
      street: 'Cambridge Road',
      city: 'London'
      },

sayHello: function() { //this section needs to be reviewed, but the code does work
      // function
      console.log('Hola Amigos!');
      },
friendHello: function(friend) {
    console.log(`Hello ${friend}`);
  },
 }

console.log(girl.name);
console.log(girl['name']);
console.log(girl.age);
console.log(girl.friends);
console.log(girl.friends[0]);
console.log(girl.friends[1]);
console.log(girl.friends[2]);
console.log(girl.address);
console.log(girl.address.number);
console.log(girl.address.street);
console.log(girl.address.city);
girl.sayHello;
girl.friendHello('Mary');
girl.friendHello(girl.friends[0]);
