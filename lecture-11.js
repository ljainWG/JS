const person = {
  firstName: "John",
  lastName: "Doe",
  age:50,
  eyeColor: "blue"
};

// Create a Copy
const x = person;

// Change Age
x.age = 10;

console.log(person);
console.log(x);

