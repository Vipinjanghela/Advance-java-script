//Problem 4

//Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override
//the draw method. Demonstrate polymorphism using instances of these classes
//ans>>

// Base class Shape
class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}

// Subclass Circle that extends Shape
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}

// Subclass Rectangle that extends Shape
class Rectangle extends Shape {
    draw() {
        console.log('Drawing a rectangle');
    }
}

// Demonstrating polymorphism
function renderShape(shape) {
    shape.draw(); // Calls the draw method of the appropriate subclass
}

// Create instances of Circle and Rectangle
const myCircle = new Circle();
const myRectangle = new Rectangle();

// Render shapes
renderShape(myCircle);     // Output: Drawing a circle
renderShape(myRectangle);  // Output: Drawing a rectangle
