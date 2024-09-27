# 100 Days of Code - Day 6: **JavaScript Mastery and OOP Concepts**

## Overview

Today, I delved into deeper concepts of **JavaScript**, specifically focusing on **Higher-Order Functions**, **Class vs Function**, and **Getters, Setters, and Static Methods** in JavaScript. It was an exciting learning experience with valuable takeaways that clarified abstract ideas and Object-Oriented Programming (OOP) structures.

## What I Learned:

### 1. **Higher-Order Functions**

- Functions that take another function as an argument or return a function.
- Example:
  ```js
  const greaterThan = (n) => (m) => m > n;
  let greaterThan10 = greaterThan(10);
  console.log(greaterThan10(11)); // true
  ```
- **Takeaway:** This allows for **function abstraction** and dynamic function creation based on inputs.

### 2. **Class vs Function in JavaScript**

- Classes provide a more structured and scalable way of handling objects, but **functions** can still be used to create objects and inheritance.
- Example:
  ```js
  class Rabbit {
    constructor(type) {
      this.type = type;
    }
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  }
  ```
- **Key Insight:** The syntax of classes is cleaner for complex structures, and with ES6, classes make code more intuitive.

### 3. **Understanding Getters, Setters, and Statics**

- **Getters** and **Setters** encapsulate internal logic for properties, making them accessible while maintaining control.
- **Static methods** belong to the class itself and not individual instances.
- Example:
  ```js
  class Temperature {
    constructor(celsius) {
      this.celsius = celsius;
    }
    get fahrenheit() {
      return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
      this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
      return new Temperature((value - 32) / 1.8);
    }
  }
  ```
- **Why use them?**: It allows for more controlled and predictable code execution, especially when manipulating data properties.

### 4. **Object Prototypes**

- **Prototypes** allow JavaScript objects to inherit properties and methods from other objects. Every function in JavaScript is an object, and constructors are functions with the `Function.prototype`.

- **Example from my practice:**

  ```js
  let protoRabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    },
  };

  function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
  }

  let brownRabbit = makeRabbit("brown");
  brownRabbit.speak("Hello!"); // Output: The brown rabbit says 'Hello!'
  ```

---

## Challenges Faced:

- **Power interruptions** made it difficult to stay consistent, and I almost missed my update streak. But I managed to push through and stay on track.
- Debugging prototype-based code required careful thought to avoid errors with `this` and `Object.create`.

---

## Goals for Tomorrow:

- Continue exploring **Chapter 6** of _Eloquent JavaScript_, diving deeper into OOP and more advanced class-based examples. (Was able to later finish)
- Begin with the first practice project in the book.

---

This marks the end of **Day 6**. Despite the hurdles, I am excited for the coming days!

---
