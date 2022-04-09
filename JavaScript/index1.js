function addressMaker(city, state) {
    // const newAddress = {city:city, state:state};
    const newAddress = {city,state};
    console.log(newAddress);
}

addressMaker('Austin', 'Texas');

let incomes = [62000, 67000, 75000];
let total = 0;

for(const income of incomes) {
    console.log(income);
    total += income;
}

console.log(total);

let fullName = "BSSM is one of the best schools in Busan!";

for(const char of fullName) {
    console.log(char);
}

const player = {
    name:'Lebron James',
    club:'LA Lakers',
    address: {
        city:'Los Angeles'
    }
}

console.log(player.address.city);

const { name, club, address : { city} } = player;

console.log(`${name} plays for ${club}`);
console.log(`${name} lives in ${city}`);

// let fullName = ['Seongho', 'Cho'];
// console.log(fullName[1]);
let [firstName, lastName] = ['Seongho', 'Cho'];
lastName = 'Kim';
console.log(lastName);

let word1 = 'Seongho';
let word2 = 'Cho';

console.log(`${word2} ${word1}`);
document.getElementById('ex-el').innerHTML = `${word2} ${word1}`;

let contacts = ["Mary", "Joel", "Danny"];
// let personalFriends = ["David", "Mary", "Joel", "Danny", "Lily"];
let personalFriends = ["David", ...contacts, "Lily"];

console.log(personalFriends);

contacts.push("John");
console.log(contacts);
console.log(personalFriends);

let person = {
    name:"Adam",
    age:25,
    city:"Manchester"
}

let employee = {
    ...person,
    salay:5000,
    position:"Software Developer"
}

console.log(employee)

function add(...nums) {
    console.log(nums);
}

add(4, 5, 1, 2, 3, 4, 5,)

// function declaration

function breakFastMenu(food) {
    return `I'm going to scrabled ${food} for breakfast.`;
}

// anonymous function
const lunchMenu = function() {
    return `I'm going to eat pizza for lunch`;
}

// Arrow function
// const dinnerMenu = (food) => {
//     return `I'm going to eat a ${food} for dinner.`;
// }

const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner.`;

function say(message = "Hello") {
    console.log(message);
}

say("Hi");
say();

const array1 = [1,2,3,];

console.log(array1.includes(2));

const pets = ['Cats', 'Dog', 'Rat'];

console.log(pets.includes('Rabbit'));

let example = "Wah";

console.log(example.padStart(10, 'W'));
console.log(example.padEnd(10, 'h'));

class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    makeNoise(sound = "Loud Noise") {
        console.log(sound);
    }

    get type() {
        return this._type;
    }

    set type(str) {
        this._type = str;
    }

    static return10() {
        return 10;
    }
}

let dog = new Animal("dog", 4);
dog.makeNoise("war war");
console.log(dog.type);
console.log(Animal.return10());

class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }

    makeNoise(sound = "Meow") {
        console.log(sound);
    }
}

let cat = new Cat('Cat', 4, 1);

cat.makeNoise("Nyang");

const buyFlightTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const error = true;
            if(error) {
                reject("Sorry, your payment was not successful.");
            } else {
                resolve("Thank you, your payment was successful.");
            }
        }, 3000)
    });
}

// buyFlightTicket().then((success)=> console.log(success));
// buyFlightTicket().catch((error)=> console.log(error));
buyFlightTicket()
.then((success) => console.log(success))
.catch((error) => console.log(error));


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  const photos = [];
async function photoUpload() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(()=> {
            photos.push("Profile Pic");
            resolve("Photo Uploaded");
        }, 3000)
    })
    let result = await uploadStatus;
    console.log(result);
    console.log(photos.length);
}

photoUpload();

const exampleSet = new Set([1,1,1,1,2,2,2,2]);

exampleSet.add(5);
exampleSet.add(3).add(17);

console.log(exampleSet.delete(5));
console.log(exampleSet.has(17));
console.log(exampleSet);

// clear : 싹 사라짐