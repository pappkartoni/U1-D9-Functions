/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
    return l1 * l2;
};

console.log("area 3x2", area(3, 2));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(int1, int2) {
    return (int1 === int2) ? 6 * int1 : int1 + int2;
};

console.log("sum 3 and 5", crazySum(3, 5));
console.log("sum 4 and 4", crazySum(4, 4));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(int) {
    return (int > 19) ? 3 * (int - 19) : 19 - int;
}; 

console.log("diff 14", crazyDiff(14));
console.log("diff 21", crazyDiff(21));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n) {
    return (n >= 20 && n <= 100) || n === 400;
};

console.log("boundary 20", boundary(20));
console.log("boundary 200", boundary(200));
console.log("boundary 400", boundary(400));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(str) {
    return (str.startsWith("Strive")) ? str : "Strive".concat(str);
};

console.log("strivify hello", strivify("hello"));
console.log("strivify Strive...", strivify("Strive for perfection"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(n) {
    return (n % 3 === 0) || (n % 7 === 0);
};

console.log("check 21", check3and7(21));
console.log("check 42", check3and7(42));
console.log("check 47", check3and7(47));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(str) {
    let reversed = "";
    let i = str.length - 1;
    while (i >= 0) {
        reversed += str[i];
        i--;
    };

    return reversed;
};

console.log("reverse Hello", reverseString("Hello"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(str) {
    let split = str.split(" ");
    for (let i = 0; i < split.length; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
    }
    return split.join(" ");
};

console.log("upperFirst hello world it's me Flo", upperFirst("hello world it's me Flo"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(str) {
    return str.slice(1, str.length-1);
};

console.log("cutString hello", cutString("hello"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n) {
    let array = [];
    while(n > 0)
    {
        array.push(Math.random() * 10); //floor this for ints >>> Math.floor(Math.random() * 11); 11 because rand is in [0,1)
        n--;
    };

    return array;
};

console.log("give random 5", giveMeRandom(5));

module.exports = {
    giveMeRandom,
  };