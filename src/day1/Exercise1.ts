//Exercise 1: Variables & Types

/**
 * VARIABLE DECLARATION SECTION
 * ============================
 * Variables are declared with TYPE but WITHOUT values
 * The variable exists but is undefined until assigned
 */
let username: string ;        // Declares a string variable (no value yet)
let age: number ;            // Declares a number variable (no value yet)
let isloggedin: boolean ;    // Declares a boolean variable (no value yet)
// These variables cannot be used until they're assigned a value

/**
 * VARIABLE INITIALIZATION SECTION
 * ================================
 * Variables are declared with TYPE AND assigned a VALUE immediately
 * The variable is ready to use right away
 */
let username1: string = "John Doe";   // String variable with initial value
let age1: number = 30;                 // Number variable with initial value
let isloggedin1: boolean = true;       // Boolean variable with initial value
// These variables can be used immediately

/**
 * FUNCTION 1: variabledeclaration
 * ================================
 * Function with typed parameters and DEFAULT VALUES
 * 
 * Default Parameters: If no argument is passed, the default value is used
 * Return Type: `: string` means this function returns a string
 * 
 * Parameters:
 * - username: string = "edited"     (defaults to "edited" if not provided)
 * - age: number = 27                (defaults to 27 if not provided)
 * - isloggedin: boolean = false      (defaults to false if not provided)
 */
function variabledeclaration(username: string = "edited", age: number = 27, isloggedin: boolean = false): string {
	// Template literal: Uses ${} to embed variables inside backticks
	return `Username: ${username}, Age: ${age}, Is Logged In: ${isloggedin}`;
}

/**
 * FUNCTION 2: variableinitialization
 * ====================================
 * Function that takes parameters and logs output to console
 * 
 * Return Type: `void` (implicitly) - console.log doesn't return a value
 * The function prints to console instead of returning a value
 */
function variableinitialization(username1: string, age1: number, isloggedin1: boolean) {
	// console.log() outputs text to the console/terminal
	return console.log(`Username: ${username1}, Age: ${age1}, Is Logged In: ${isloggedin1}`);
}

/**
 * FUNCTION CALLS WITH DIFFERENT ARGUMENTS
 * ========================================
 */

// Call 1: Passing custom arguments (overwrites default values)
console.log(variabledeclaration("Alice", 25, false));
// Output: "Username: Alice, Age: 25, Is Logged In: false"

// Call 2: No arguments passed (uses default values)
console.log(variabledeclaration());
// Output: "Username: edited, Age: 27, Is Logged In: false"

// Call 3: Passing initialized variables to function
variableinitialization(username1, age1, isloggedin1);
// Output: "Username: John Doe, Age: 30, Is Logged In: true"