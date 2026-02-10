// objectivewithtypes.ts - Objects with type definitions
export {};
const user = {
	name: "John Doe",
	age: 30,
	isloggedin: true
}

/**
 * METHOD 1: for...in loop
 * 
 * Loops through each property name (key) in the object
 * Why "as keyof typeof user"? 
 * - TypeScript needs assurance that 'key' is a valid property of the user object
 * - This is a TYPE ASSERTION telling TypeScript: "Trust me, this key exists"
 */
console.log("===== Method 1: for...in loop =====");
for (const key in user) {
	console.log(`${key}: ${user[key as keyof typeof user]}`);
}

/**
 * METHOD 2: Object.entries() - RECOMMENDED
 * 
 * Converts object to array of [key, value] pairs
 * forEach loops through each pair
 * Advantage: No type assertion needed, TypeScript already knows the types
 * This is the CLEANEST and MODERN way
 */
console.log("\n===== Method 2: Object.entries() =====");
Object.entries(user).forEach(([key, value]) => {
	console.log(`${key}: ${value}`);
});

/**
 * METHOD 3: Object.keys()
 * 
 * Gets only the property NAMES (keys) from the object
 * Then accesses each value using the key
 * Similar to Method 1 but using Object.keys() instead of for...in
 */
console.log("\n===== Method 3: Object.keys() =====");
Object.keys(user).forEach(key => {
	console.log(`${key}: ${user[key as keyof typeof user]}`);
});

/**
 * METHOD 4: Object.values()
 * 
 * Gets ONLY the VALUES (no keys)
 * Use this when you only need the data, not the property names
 */
console.log("\n===== Method 4: Object.values() =====");
Object.values(user).forEach(value => {
	console.log(value);
});

/**
 * METHOD 5: JSON.stringify()
 * 
 * Converts object to JSON string with pretty formatting
 * Parameters: (object, replacer, indentation)
 * null = no filtering, 2 = indent with 2 spaces
 * Best for: Viewing entire object structure
 */
console.log("\n===== Method 5: JSON.stringify() =====");
console.log(JSON.stringify(user, null, 2));

/**
 * METHOD 6: console.table()
 * 
 * Displays object as a formatted TABLE in console
 * BEST FOR DEBUGGING - Visual and easy to read
 * Perfect for viewing multiple objects
 */
console.log("\n===== Method 6: console.table() =====");
console.table(user);

/**
 * METHOD 7: Destructuring
 * 
 * Extract specific properties from object into variables
 * Then use those variables in output
 * Advantage: Cleaner when you need only certain properties
 */
console.log("\n===== Method 7: Destructuring =====");
const { name, age, isloggedin } = user;
console.log(`Name: ${name}, Age: ${age}, Logged In: ${isloggedin}`);

/**
 * METHOD 8: Direct console.log()
 * 
 * Log the entire object directly
 * Quickest way during development
 * Browser console shows it as expandable object
 */
console.log("\n===== Method 8: Direct console.log() =====");
console.log(user);

