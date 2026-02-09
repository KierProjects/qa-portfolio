"use strict";
//variable declaration
let username;
let age;
let isloggedin;
//variable initialization
let username1 = "John Doe";
let age1 = 30;
let isloggedin1 = true;
function variabledeclaration(username = "edited", age = 27, isloggedin = false) {
    return `Username: ${username}, Age: ${age}, Is Logged In: ${isloggedin}`;
}
function variableinitialization(username1, age1, isloggedin1) {
    return console.log(`Username: ${username1}, Age: ${age1}, Is Logged In: ${isloggedin1}`);
}
console.log(variabledeclaration("Alice", 25, false));
console.log(variabledeclaration());
variableinitialization(username1, age1, isloggedin1);
