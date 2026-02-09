//variable declaration
let username: string ;
let age: number ;
let isloggedin: boolean ;

//variable initialization
let username1: string = "John Doe";
let age1: number = 30;
let isloggedin1: boolean = true;

function variabledeclaration(username: string = "edited", age: number = 27, isloggedin: boolean = false): string {
	return `Username: ${username}, Age: ${age}, Is Logged In: ${isloggedin}`;
}

function variableinitialization(username1: string, age1: number, isloggedin1: boolean) {
	return console.log(`Username: ${username1}, Age: ${age1}, Is Logged In: ${isloggedin1}`);
}

console.log(variabledeclaration("Alice", 25, false));

console.log(variabledeclaration());

variableinitialization(username1, age1, isloggedin1);