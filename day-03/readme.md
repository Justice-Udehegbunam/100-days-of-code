Here’s a possible continuation for your Day 4 README, summarizing what you've learned so far:

---

# Day 03: JavaScript Data Types Review

At first, taking on this chapter was challenging because I thought I already knew everything about JS data types. But I quickly realized there was more to uncover:

- **Arrays are still objects**  
  JavaScript treats arrays as objects behind the scenes.

```js
console.log(typeof []); // Outputs: "object"
```

- **Null is not "nothing"**  
  Contrary to what I previously thought, `null` is actually a value in JavaScript. It’s a special object that represents an intentional absence of any object value.

```js
console.log(typeof null); // Outputs: "object"
```

- **Type Coercion**  
  JavaScript is a loosely typed language, which means it automatically converts values between types when necessary. I relearned that this can cause unexpected results, and being mindful of type conversions is key.

```js
console.log("5" - 1); // Outputs: 4 (string to number conversion)
```
