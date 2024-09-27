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

class Particle {
  speed = 0;
  // This behaves like a default parameter for classes
  constructor(position) {
    this.position = position;
  }
}

let myParticle = new Particle(2);

console.log(myParticle.speed); // this retrieves the speed
myParticle.speed = 10;
// console.log(myParticle.speed);

// Private Property
//  It is common for classes to define some properties and methods for internal use that are not part of their interface.

class SecretiveObject {
  #getSecret() {
    return "I ate all the plums";
  }
  // The "#" sign makes the value or function invisible to the outside environmment but can only be used in the scope of the class.
  interrogate() {
    let shallISayIt = this.#getSecret();
    return shallISayIt;
  }
}

let findSecret = new SecretiveObject();

console.log(findSecret.interrogate());

// MAP
let ages = {
  Boris: 39,
  Liang: 22,
  Julia: 62,
};
console.log(`Júlia is ${ages["Julia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false because it vant see anyone with that name
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true
/* But we certainly didn’t list anybody named toString in our map. Yet because plain objects derive from Object prototype, it looks like the property is there.
For this reason, using plain objects as maps is dangerous. There are several possible ways to avoid this problem. First, you can create objects with no prototype. */

let age = new Map();
age.set("justice", 39);
console.log(age.get("justice"));

Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};

let killerRabbit = "Killer Rabbit";

console.log(String(killerRabbit));

//  Getters, Setters & Static
/* DIALOGUE
### Getters, Setters, and Static Methods in JavaScript Classes

#### 1. **Getters:**
A **getter** allows you to define a property that is calculated dynamically when accessed, without needing to explicitly call a method. It's used to retrieve or access a property value, and you can control what happens when the property is read. Getters are declared using the `get` keyword before the method name.

Here’s how the getter works:

```js
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  
  // Getter for the Fahrenheit conversion
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit); // Outputs: 71.6
```

- **Why use it?** Instead of storing both Celsius and Fahrenheit, you just store one (Celsius), and dynamically calculate Fahrenheit when accessed. This keeps your data consistent and avoids storing redundant information.

#### 2. **Setters:**
A **setter** allows you to define what happens when a property is updated or written to. Instead of assigning a value directly, you can control how that value is processed or transformed before it’s stored. Setters are declared using the `set` keyword.

Here’s how a setter works:

```js
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  
  // Getter for Fahrenheit
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  
  // Setter for Fahrenheit
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
}

let temp = new Temperature(22);
temp.fahrenheit = 86; // This calls the setter, updating `celsius`
console.log(temp.celsius); // Outputs: 30
```

- **Why use it?** Setters allow you to control how a value is set. For instance, in the above example, when you set the `fahrenheit` property, the value is automatically converted back to Celsius and stored. This helps maintain logical consistency between the two temperature units.

#### 3. **Static Methods:**
A **static method** is associated with the class itself, not with instances of the class. You can think of static methods as utility functions related to the class, but they do not operate on individual instances. Static methods are defined using the `static` keyword.

Here’s an example of a static method:

```js
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  // Static method to create an instance from Fahrenheit
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = Temperature.fromFahrenheit(86); // Create a Temperature object from Fahrenheit
console.log(temp.celsius); // Outputs: 30
```

- **Why use it?** Static methods are useful for defining behavior related to the class itself, not its instances. In the example, `fromFahrenheit` is a utility method for converting Fahrenheit to Celsius when creating a new `Temperature` object. You don’t need an instance to use this method, you just call it on the class.

---

### Why We Use Getters, Setters, and Static Methods:

1. **Encapsulation**: Getters and setters allow you to control how properties are accessed and modified, adding a layer of abstraction. This lets you change how a property works internally without affecting the external API of the class.

2. **Computed Properties**: Getters let you define properties that are dynamically computed, rather than statically stored, ensuring real-time calculations or transformations.

3. **Data Validation**: Setters allow you to validate or transform input data before storing it. For instance, if someone tries to set a temperature below absolute zero, you could raise an error or set a default minimum.

4. **Utility Methods**: Static methods provide a way to define helper functions that relate to the class, but don’t require instance-specific data. This keeps the class logically organized, while offering utility functions.

*/

// cant this be done with plain function methods amd stuffs ?
/* Yes, you can use plain functions to replicate getter/setter and static behaviors, but classes make the code cleaner, more organized, and easier to maintain, especially for large or complex projects. They also make your interfaces more intuitive for others using your code. */
