//Stack of adding require statements 
/* 1. core modules first
2. NPM Packages 
3. Our own files */

const {argv} = require("node:process");
const yargs = require("yargs")

// console.log(argv);

// let name = argv[2]

// if (name == "justice") {
//     console.log("Welcome Justice");
    
// } else console.log( `I don't know you, ${name}`);


//  Using Yargs 
console.log(argv);

console.log(yargs.argv); /* This gives you a cleaner version of the process.argv property 

  COMPARISON
PROCESS
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Justice\\Desktop\\100-days-of-code\\node-js-course\\notes-app\\practice\\getInputBasics.cjs'      
]
  YARGS
{ _: [], '$0': 'getInputBasics.cjs' }
 //  " _: [],": 
 
 This is the object returned by yargs after parsing the command-line arguments:

_: [] – This is an array that collects any positional arguments (arguments without a flag like --), but in this case, there are none, so it's an empty array.
paint: 2 – This is the parsed value for the --paint flag. yargs has correctly interpreted --paint=2 and assigned the value 2 to the paint property.
'$0': 'getInputBasics.cjs' – This shows the name of the script being executed, which is getInputBasics.cjs in your case.

When you run the command:

bash
Copy code
node getInputBasics.cjs paint=2
without a flag (i.e., not using --), the behavior of yargs is different. Here's what's happening:

Command Line Arguments:

[  'C:\\Program Files\\nodejs\\node.exe',  'C:\\Users\\Justice\\Desktop\\100-days-of-code\\node-js-course\\notes-app\\practice\\getInputBasics.cjs',       'paint=2']
'paint=2' is treated as a positional argument, not as a flag.
Since it's not prefixed with --, yargs considers it a regular argument rather than an option (flag).
Parsed Object:


{ _: [ 'paint=2' ], '$0': 'getInputBasics.cjs' }
_: ['paint=2'] – This means that paint=2 is treated as a positional argument and is stored in the _ array.
$0: 'getInputBasics.cjs' – This is the name of the script as before.
Since yargs treats paint=2 as a positional argument (not an option), it puts it into the _ array and does not create a paint property with the value 2.
*/




