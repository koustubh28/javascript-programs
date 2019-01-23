const person = {
    name: "Koustubh",
    age: 25,
    greet() {
        console.log('Hello Mr.' + this.name + ' your age is ' + this.age);
    }
};

const { name, age } = person;
console.log(name, age);

const hobbies = ["Dancing", "Singing"];
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);

//Basically what does destructuring does is that it pulls out property value from object
//or an array