/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

console.log("Well done! I was printed!");

/**
 * To comment / uncomment blocks, first select it and with keyboard press CMD + SHIFT + 7
 */

/**
 * Variables and constants
 */

// let nameOne = "Anakin";
// nameOne = "Darth Vader"; // This is okay

// const nameTwo: string = "Anakin";

// nameTwo = "Darth Vader"; // This is not possible

/**
 * Most common types - Part 1
 */

// let nameOne: string = "Anakin";

// nameOne = 66; // Not possible

// nameOne = "Darth Vader"; // This is okay

// const someNumber: number = 42;

// const isFriday: boolean = true;

// console.log(isFriday);

/**
 * Most common types - Part 2
 */

// const nameArray: string[] = ["Luke", "Yoda", "Anakin", "Chewbacca", "Han Solo"];

// console.log(nameArray[1]); // Prints 'Yoda'

// nameArray[2] = "Darth Vader"; // reassign 'Anakin' as 'Darth Vader'

// console.log(nameArray); // Prints whole array

// console.log(nameArray.length); // Prints 5

// nameArray.push("R2D2");

// console.log(nameArray.length); // Prints 6

/**
 * Most common types - Part 3
 */

// const famousFurball = {
//   name: "Chewbacca",
//   homePlanet: "Kashyyyk",
//   bestie: "Han Solo",
//   quotes: ["WAGRRRRWWGAHHHHWWWRRGGAWWWWWWRR", "GGGWARRRHHWWWW", "RRWWWGG"],
// };

// console.log(famousFurball); // Prints Chewbacca

// famousFurball.name = "Chewie"; // Reassign name

// console.log(famousFurball.quotes[1]); // Prints 'GGGWARRRHHWWWW'

/**
 * Functions
 */

// // Without parameters, not returning anything
// const greeting = (): void => {
//   console.log("Hello there!");
// };

// greeting(); // Calls greeting function which triggers the console.log

// // With parameters, returning string
// const sumOf = (a: number, b: number): string => {
//   const sum = a + b;
//   return `Sum is: ${sum.toString()}`;
// };

// // Call function and store the return value to a constant
// const storeSumValue: string = sumOf(5, 3);

// console.log(storeSumValue); // Prints "Sum is: 8"

/**
 * Condition Checks and Operations - basic if-else
 */

// const nameToCheck = "Anakin Skywalker";
// if (nameToCheck === "Anakin Skywalker") {
//   // === check if value is exactly something
//   console.log("Definitely is Darth Vader");
// } else {
//   console.log("This person is not Darth Vader");
// }

/**
 * Condition Checks and Operations - ternary operator
 */

// const isTrueFan = true;
// // Conditional ternary operator:
// // condition ? exprIfTrue : exprIfFalse

// const quoteOne = isTrueFan
//   ? "No, I am your father!"
//   : "Luke, I am your father!";

// // Invert any condition with !-mark
// const quoteTwo = !isTrueFan
//   ? "Luke, I am your father!"
//   : "No, I am your father!";

/**
 * Condition Checks and Operations - AND / OR
 */

// const son = "Luke";
// const daughter = "Leia";

// // AND operator &&
// if (son === "Luke" && daughter === "Leia") {
//   console.log("Darth Vader is the dad for both!");

//   // OR operator ||
// } else if (son === "Luke" || daughter === "Leia") {
//   console.log("Darth Vader is dad to one of them!");
// }

/**
 * Looping arrays
 */

// const numberArray: number[] = [1, 2, 3, 4, 5];

// // Modify the array by multiplying each item in array
// numberArray.forEach((item) => {
//   // ESLint does its job and tells that reassigning values is a bad convention!
//   item *= item;
// });

// // numberArray is now [1, 4, 9, 16, 25]

// const anotherArray: number[] = [1, 2, 3, 4, 5];

// const mappedArray = anotherArray.map((item) => item * item);

// // anotherArray is unmodified
// // mappedArray is now [1, 4, 9, 16, 25]
