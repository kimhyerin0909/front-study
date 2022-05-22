// Object Destructuring

function getPerson() {
    return {
        firstName : "John",
        lastName : "Doe",
        age : 37
    }
}

function displayFullName({firstName, lastName}) {
    console.log(`${firstName} ${lastName}`);
}

let {firstName, lastName} = getPerson();
console.log(firstName, lastName);
displayFullName(getPerson());

// Array Destructuring

function getScores() {
    return [70, 80, 90];
}

let [x, y, z] = getScores();

console.log(x, y, z);

let [a, b, ...args] = getScores();
console.log(a, b, args);

// Async, Await

async function myFunc() {
    const r = await asyncFunc();
}

const myFunc2 = async() => {
    const r = await asyncFunc();
}