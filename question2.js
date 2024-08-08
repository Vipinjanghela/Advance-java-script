//Problem 2

//Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional
//property designation and a method getDetails to display the employee details.
//ans

// Person constructor function from Problem 1
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee constructor function that inherits from Person
function Employee(name, age, designation) {
    // Call the Person constructor to initialize name and age
    Person.call(this, name, age);
    // Initialize the designation property
    this.designation = designation;
}

// Set up inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding the getDetails method to Employee's prototype
Employee.prototype.getDetails = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
};

// Creating instances of Employee
const employee1 = new Employee('Alice', 30, 'Software Engineer');
const employee2 = new Employee('Bob', 25, 'Product Manager');

// Using methods
employee1.sayHello();   // Output: Hello, my name is Alice and I am 30 years old.
employee1.getDetails(); // Output: Name: Alice, Age: 30, Designation: Software Engineer

employee2.sayHello();   // Output: Hello, my name is Bob and I am 25 years old.
employee2.getDetails(); // Output: Name: Bob, Age: 25, Designation: Product Manager
