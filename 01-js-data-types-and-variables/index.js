// ------------ Debugging and Testing tools: ------------

// Using console.log()
// Run `node` in terminal to enter a REPL
// Debugger

// ------------ Variables: ------------

// What is a variable?

//Console.log() 
//Node inside terminal to use as REPL 
//Debugger 


// How can a variable be declared

//A place in memory for a value to be stored 
//Container for some value 
//Why use it? So we can reference that data later on 



// What is the difference between let and const


// Let allows reassigning variables – Use when we know value will change 

// Const does not allow – Use when we know value won't change 

// Scope: accessibility of the values and the variables 

// Global: it's accessible everywhere in the file -- you can access it anywhere in your application. 

// Local: Only accessible within the function that its been defined in 

// Block scopes: only restricted within the block



// ------------ 7 data types in JS: ------------
// primitive data ty[es: just one value]

// Number

// Whole numbers: 3 
// Float numbers: 3.14 
// NaN: 'not a number' - mean something dealing with numbers went wrong, or some type of calculation is wrong


// String

//"this is a string"
//'this is also a string'
//`so is this` (back ticks for interpolation --> ${} - which is when we turn an expression into a string


// Undefined

// non-existant value; no value has been assigned; no value is attached to it


// Null

// empty/non existant value has to be assigned e.g. let b = null; b is null

// Boolean

// truthy or falsey values 
// conditional statements to evaluate what is going to happen next

// double bang operator (!!) will evaluate the boolean value of something (true or false)
// bang operator (!) negate the value

// examples of falsey values
//  - 0
//  - null
//  - undefined
//  - ""
//  - false
//  - NaN

// everything else is truthy

// BigInt ---- used for any numbers that are too large, and out of range for the Number type

// Symbol ---- used in objects as properties, used as a unique identifier for object props
// key is an example of a symbol

// What is the difference between null and undefined?

// What is the relationship between data types and variables

// ------------ Conditional statements ------------

// use these to add contol flow to our application ---- want to perform diff things based on a condition

// if...else

// let pokemon = "Voltorb";
// let likes = 3;

// if (likes === 1) {
//   console.log(`${pokemon} has 1 like`);
// } else {
//   console.log(`${pokemon} has ${likes} likes`);
// }

// ---logital operators---

// === strict
// == loose
// !== strict (not)
// != loose (not)

// if...else if...else

// let pokemon = "Voltorb";
// let likes = 1;

// if (likes === 0) {
//   console.log("render: Show some love!");
// } else if (likes === 1) {
//   console.log('render: 1 like');
// } else {
//   console.log(`render: ${likes} likes`)
// }

// ternary operators

// condition ? truthy response : falsey response

// let favorite = true
// let response = favorite ? "❤️" : "♡"
// console.log(response)

// ------------------------------------------------ //
// console.log("------------------------");
// console.log("⬇️ Break Out Activites ⬇️");
// console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
// console.log("💡 Use console.log() To Check Answers 💡");
// console.log("------------------------");

// 🚧 Break Out Activity 1: Using let vs. const

// Uncomment the code below to properly declare and assign a value to "x" using "const"

// const x;

// const x = 5;

// const x;

// console.log(`Success! x = ${x}`);

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// Uncomment the code below to properly declare and assign a value to "y" using "let"

// let y;

// let y = 5;

// let y;

// console.log(`Success! y = ${y}`);

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// Uncomment the code below to get a successful response in console

// const a = 2;

// a = 2;

// let b;

// let b = 4

// console.log(`Success! ${a} + ${a} = ${b}`);

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// 🚧 Break Out Activity 2: Using if...else

// 🚧 Set a value for "time" between 0 and 24
// let time;

// If "time" is less than or equal to 12...
// if (❓) {

// console.log(`${time} is in the AM.`)

// In all other cases...
// } else {

// console.log(`${time} is in the PM.`)

// }

// ✨ BONUS: Try refactoring the above expression using a ternary operator.

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// 🚧 Break Out Activity 3: Using if...else...if

// We are given a variable "marks." Our task is to print:

// - "AA" if marks is greater than 90.
// - "AB" if marks is greater than 80 and less than or equal to 90.
// - "BB" if marks is greater than 70 and less than or equal to 80.
// - "BC" if marks is greater than 60 and less than or equal to 70.
// - "CC" if marks is greater than 50 and less than or equal to 60.
// - "CD" if marks is greater than 40 and less than or equal to 50.
// - "DD" if marks is greater than 30 and less than or equal to 40.
// - "FF" if marks is less than or equal to 30.

// 🚨 Assign a value to "marks" between 0 and 100

// let marks;

// 🚨 Format your if...else if...else conditional below

// if (❓) {
// ...
// } else if (❓) {
// ...
// ...
// } else {
// ...
// }



