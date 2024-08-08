//Problem 3

//Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this
//within these methods such that method chaining of add, subtract, multiply and divide is possible
//ans>.

// Calculator object
function Calculator() {
    this.value = 0;
}

// Method to add a number
Calculator.prototype.add = function (number) {
    this.value += number;
    return this; // Return the instance for chaining
};

// Method to subtract a number
Calculator.prototype.subtract = function (number) {
    this.value -= number;
    return this; // Return the instance for chaining
};

// Method to multiply by a number
Calculator.prototype.multiply = function (number) {
    this.value *= number;
    return this; // Return the instance for chaining
};

// Method to divide by a number
Calculator.prototype.divide = function (number) {
    if (number !== 0) {
        this.value /= number;
    } else {
        console.error('Cannot divide by zero.');
    }
    return this; // Return the instance for chaining
};

// Method to get the current value
Calculator.prototype.getValue = function () {
    return this.value;
};

// Usage of Calculator with method chaining
const calculator = new Calculator();

const result = calculator
    .add(10)        // value = 10
    .subtract(2)    // value = 8
    .multiply(3)    // value = 24
    .divide(4)      // value = 6
    .getValue();    // Get the final value

console.log(result); // Output: 6
