//Problem 1

//Create an object constructor Person that takes name and age as parameters and initializes them. Also, add
//a method sayHello to greet the person.
// Object constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating instances of Person
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Using the sayHello method
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.


