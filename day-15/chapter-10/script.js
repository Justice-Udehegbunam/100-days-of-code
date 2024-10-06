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

*/
import { dayName, dayNumber } from "./day";

let now = new Date();

console.log(now);

console.log(dayName());
