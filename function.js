"use strict";
// Question 1:
// Write a TypeScript function called isEven that takes an integer as a parameter and returns true if the number is even and false if it's odd.
function isEven(num1) {
    if (num1 % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
let result = isEven(8);
console.log(result);
/* Question 2:
 Create a TypeScript function named gradeClassifier that takes a numerical grade as input (0-100) and returns a letter grade based on the following scale:

 90-100: 'A'
 80-89: 'B'
 70-79: 'C'
 60-69: 'D'
 0-59: 'F'*/
function gradeClassifier(marks) {
    if (marks >= 90 && marks <= 100) {
        return "A";
    }
    else if (marks >= 80 && marks <= 89) {
        return "B";
    }
    else if (marks >= 70 && marks <= 79) {
        return "C";
    }
    else if (marks >= 60 && marks <= 69) {
        return "D";
    }
    else {
        return "F";
    }
}
let grade = gradeClassifier(45);
console.log("your grade is ", grade);
/* Question 3
 Write a TypeScript function named greetBasedOnTime that takes the current hour as a parameter (24-hour format) and returns a greeting based on the time of day. The greetings should be as follows:

Before 12: "Good morning"
From 12 to 17: "Good afternoon"
After 17: "Good evening"*/
function greetBasedOnTime(currentHour) {
    if (currentHour < 12) {
        return "Good morning";
    }
    else if (currentHour >= 12 && currentHour <= 17) {
        return "Good afternoon";
    }
    else {
        return "Good Evening ";
    }
}
let greetings = greetBasedOnTime(23);
console.log("hi", greetings);
/* Question 4
Write a TypeScript function named fizzBuzz that takes a number as a parameter. For numbers divisible by 3, the function should return "Fizz". For numbers divisible by 5, return "Buzz". For numbers divisible by both 3 and 5, return "FizzBuzz". Otherwise, return the input number. */
function fizzBuzz(num3) {
    if (num3 % 3 == 0) {
        return "Fizz";
    }
    else if (num3 % 5 == 0) {
        return "Buzz";
    }
    else if (num3 % 3 == 0 && num3 % 5 == 0) {
        return "FizzBuzz";
    }
    else {
        return num3.toString();
    }
}
let div = fizzBuzz(16);
console.log(div);
/* Question 5

Write a TypeScript function called maximum that takes three numbers as input and returns the maximum of the three. */
function maximum(a, b, c) {
    let max;
    if (b > a && b > c) {
        return max = b;
    }
    else if (c > a && c > b) {
        return max = c;
    }
    else {
        return max = a;
    }
}
let maxNum1 = maximum(3, 8, 6);
console.log("the max num is", maxNum1);
let maxNum2 = maximum(17, 8, 9);
console.log("the max num is", maxNum2);
