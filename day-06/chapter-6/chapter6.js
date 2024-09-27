// The Secret Life of Objects
/* NOTES

Object Oriented Programming: This is a special technique that focuses on Objects as the central principle of Programming.

You can think of javascript built-in data structures, such as arrays & strings as reusable abstract data types.

Each abstract data type has an INTERFACE: This is a collection of operations or programs that can be performed on it.s

"this" keyword in object bindign tells the code to look to the parent object instantiation for the property or key.

CLASSES: A class defines the structure of a type of object OR A class is a template for creating objects with specific properties and methods.. 
Such an object is called an "instance" of the class

To create an instance of a given class, you have to make an object that derives from the proper prototype, but you also hav to make sure it itself has the properties that instances of this class are supposed to have. 
The above is what a "constructor" function does 

So in essence: 
A class is the PLAN
an "instance" is a model
a "constructor" is a replica that aims to replicate a model following the guidelines of the class
*/

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
}; // This is an example of a class creation without the specific use of the "class" keyword

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit, rabbit.speak;
}

console.log(makeRabbit("brown"));

// Now here is the power of class
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
}

// Why are the names of classes Capitalized
// Ans: Because prior to 2015 functions where what was used to create classes in js and in order to distinguish it was the major reason

/* Dialogue

then why is this true "The actual prototype of a constructor is Function.
prototype since constructors are functions"
ChatGPT said:
ChatGPT
In JavaScript, the statement that "The actual prototype of a constructor is Function.prototype since constructors are functions" is true because constructors are just a special type of function.

Here's why this works:

1. Functions in JavaScript Are Objects:
In JavaScript, functions themselves are objects. This means they can have properties and methods just like any other object. All functions, including constructors, are derived from the Function constructor.

2. Function.prototype:
All functions in JavaScript (including constructor functions and classes) inherit from Function.prototype. This is the built-in prototype that provides methods like call(), apply(), and bind(), which are available to all functions.

3. Constructors Are Just Functions:
A constructor function is simply a regular function that is used with the new keyword to create objects.
Since it is a function, it inherits from Function.prototype just like any other function.*/

/* When used as an expression, it doesn’t define a binding but just produces the constructor as a value. You are allowed to omit the class name in a class expression.
let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello */

let object = new (class {
  getWord() {
    return "hello";
  }
})();
console.log(object.getWord());
