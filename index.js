// Exercise #1
let age = 38;
console.log("This is my age" + " " + age);

// Exercise #2
var month;
let surname;
const language = "Polish";

// Exercise #3
month = "January";
surname = "Matueva";

console.log(month);
console.log(surname);
console.log(language);

/* Exercise #4 & Exercise #6
const name = "Maja"; 
===
The const declaration declares block-scoped local variables. 
The value of a constant can't be changed through reassignment using the assignment operator, 
but if a constant is an object, its properties can be added, updated, or removed.
===
console.log(name);

name = "Albert";
console.log(name);

I got a message: Uncaught TypeError: Assignment to constant variable.
I need to change from const to let,therefore I will be able to change the value */

//  e.g.
let name = "Maja";
console.log(name);

name = "Albert";
console.log(name);

// Exercise #5
/* A Boolean is a type of data that has only two possible values: true or false. 
You can think of a boolean like the answer to a yes or no question. 
If the answer is yes, the Boolean value is true. 
If the answer is no, the boolean value is false.
*/

// Exercise #7
const number1 = 25,
      number2 = 5;
const result = number1 + number2;
console.log(result);

// Exercise #8
const result1 = number1 - number2;
const result2 = number1 + number2;
const result3 = number1 / number2;
console.log(result1, result2, result3);

// Exercise #9
let a = 1;
console.log(a);
a += 5;
console.log(a); //6

// Exercise #10, answer is 9
// Exercise #11 => we can every time change our value, when it assinged in let, not const.
