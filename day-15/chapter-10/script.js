//  MODULES

// This is an art of a programmer to be able to structurally think about programs in such a way that it doesnt feel like a "big ball of mud" that when one comes down -they all come down.

// To post about this tomorrow

// A module is a piece of program which specifies which other modules it relies on and what functionality it provides to other modules

//  A Dependency relates to how modules share functionalities between each other

// The aim of modules is make sytems interact in a more structured way and less "muddy"

/* ES MODULES
The original JavaScript language did not have any concept of a module.

Scripts behave in the old way: their bindings are defined in the global scope, and they have no way to directly reference other
scripts.

Modules get their own separate scope and support the import and export keywords, which aren’t available in scripts, to declare their dependencies and interface. This module system is usually called ES modules (where ES stands for ECMAScript).

// The export keyword is used to indicate that a binding is part of a moodules interface

IMPORT & EXPORT declarations cannot appear inside of functions, loops or other blocks. because they are immediately resolved once the pagfe loads

A module’s interface thus consists of a collection of named bindings, which other modules that depend on the module can access. Imported bindings can be renamed to give them a new local name using as after their name.

A module may also have a special export named default, which is often used for modules that only export a single binding. To define a default export, you write export default before an expression, a function declaration, or a class declaration. 

export default ["Winter", "Spring", "Summer", "Autumn"];

Such a binding is imported by omitting the braces around the name of the import.

import seasonNames from "./seasonname.js";

To import all bindings from a module at the same time, you can use import "*" You provide a name, and that name will be bound to an
object holding all the module’s exports. This can be useful when you
are using a lot of different exports.

*/
import { dayName, dayNumber, dayNumber as myNum } from "./day.js";

console.log(myNum("thursday")); //  this goes to show you that an import can be renamed using the as keyword

let now = new Date();

let day = now.getDay();

console.log(day);

console.log(dayName(day));

import * as images from "./images/constants.js";
// this now creates an object in the clobal scope and assigns the imports names as its keys and its values as whatever is stored there

// console.log(images.icon);

//  PACKAGE
//  A package is a Chunk of code that can be distributed ie  (copied/installed)

//  Difference between ES module and CommonJS modules
/* An important difference between this system and ES modules is that ES module imports happen before a module’s script starts running, whereas require is a normal function, invoked when the module is already running. */

/* Bundlers - Because fetching a single big file tends to
be faster than fetching a lot of tiny ones, web programmers have started
using tools that combine their programs (which they painstakingly split
into modules) into a single big file before they publish it to the web.
Such tools are called bundlers. 

And we can go further. Apart from the number of files, the size of the
files also determines how fast they can be transferred over the network.
Thus, the JavaScript community has invented Minifiers. These are tools
that take a JavaScript program and make it smaller by automatically
removing comments and whitespace, renaming bindings, and replacing
pieces of code with equivalent code that take up less space.*/
