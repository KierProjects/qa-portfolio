"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SAMPLE OBJECT
 * ==============
 * This is a simple user object with three properties:
 * - name: stores a STRING value
 * - age: stores a NUMBER value
 * - isloggedin: stores a BOOLEAN value
 */
const user = {
    name: "John Doe",
    age: 30,
    isloggedin: true
};
/**
 * METHOD 1: for...in loop
 * =======================
 *
 * How it works:
 * - Loops through EACH property name (key) in the object
 * - For each key, accesses its value using bracket notation: user[key]
 *
 * Why "as keyof typeof user"?
 * - TypeScript doesn't know what 'key' is at compile time
 * - This TYPE ASSERTION tells TypeScript: "Trust me, this key exists in user"
 * - Without it, TypeScript would give an error about unsafe access
 *
 * When to use:
 * - When you need both keys and values
 * - Good for general object iteration
 *
 * Output:
 * name: John Doe
 * age: 30
 * isloggedin: true
 */
console.log("===== Method 1: for...in loop =====");
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
/**
 * METHOD 2: Object.entries() - RECOMMENDED ⭐
 * ============================================
 *
 * How it works:
 * - Converts object into array of [key, value] pairs
 * - Example: { name: "John", age: 30 } → [["name", "John"], ["age", 30]]
 * - forEach iterates through each pair
 * - Destructuring: ([key, value]) extracts both at once
 *
 * Advantages:
 * - No type assertion needed - TypeScript already knows the types
 * - More functional/modern approach
 * - Cleaner syntax than for...in
 *
 * When to use:
 * - BEST PRACTICE - use this most of the time
 * - When you need both keys and values
 * - When you want clean, readable code
 *
 * Output:
 * name: John Doe
 * age: 30
 * isloggedin: true
 */
console.log("\n===== Method 2: Object.entries() =====");
Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
/**
 * METHOD 3: Object.keys()
 * =======================
 *
 * How it works:
 * - Gets ONLY the property NAMES (keys) from the object
 * - Returns array: ["name", "age", "isloggedin"]
 * - Then accesses each value using the key
 * - Still needs type assertion like Method 1
 *
 * Advantages:
 * - Good when you need to know all property names
 * - Useful for validation or checking if property exists
 *
 * When to use:
 * - When you need to iterate over keys and get values
 * - When you need just the keys for some other purpose
 *
 * Output:
 * name: John Doe
 * age: 30
 * isloggedin: true
 */
console.log("\n===== Method 3: Object.keys() =====");
Object.keys(user).forEach(key => {
    console.log(`${key}: ${user[key]}`);
});
/**
 * METHOD 4: Object.values()
 * ==========================
 *
 * How it works:
 * - Gets ONLY the VALUES, ignores the keys
 * - Returns array: ["John Doe", 30, true]
 * - No key information available
 *
 * Use case:
 * - When you only care about the data, not property names
 * - Example: export data to CSV, send to API
 *
 * When to use:
 * - When you don't need to know which property each value belongs to
 * - When extracting just the data
 *
 * Output:
 * John Doe
 * 30
 * true
 */
console.log("\n===== Method 4: Object.values() =====");
Object.values(user).forEach(value => {
    console.log(value);
});
/**
 * METHOD 5: JSON.stringify()
 * ==========================
 *
 * How it works:
 * - Converts JavaScript object to JSON string
 * - First param: object to convert
 * - Second param: null = no filtering (we want everything)
 * - Third param: 2 = indent with 2 spaces for readability
 *
 * Output format:
 * {
 *   "name": "John Doe",
 *   "age": 30,
 *   "isloggedin": true
 * }
 *
 * Use case:
 * - Display entire object structure nicely
 * - Export data as JSON
 * - Save to file or send over network
 *
 * When to use:
 * - When you want to see the whole object in JSON format
 * - For debugging or data export
 */
console.log("\n===== Method 5: JSON.stringify() =====");
console.log(JSON.stringify(user, null, 2));
/**
 * METHOD 6: console.table() ⭐ BEST FOR DEBUGGING
 * ================================================
 *
 * How it works:
 * - Displays object as a formatted TABLE in console
 * - Automatically formats keys and values in columns
 * - Super easy to read visually
 *
 * Output (table format):
 * ┌─────────────┬─────────────┐
 * │ (index)     │ Values      │
 * ├─────────────┼─────────────┤
 * │ name        │ John Doe    │
 * │ age         │ 30          │
 * │ isloggedin  │ true        │
 * └─────────────┴─────────────┘
 *
 * When to use:
 * - BEST FOR DEBUGGING - most visual and clear
 * - When you want to quickly inspect an object
 * - Works great with arrays of objects too
 */
console.log("\n===== Method 6: console.table() =====");
console.table(user);
/**
 * METHOD 7: Destructuring
 * =======================
 *
 * How it works:
 * - Extract specific properties from object into variables
 * - Syntax: const { property1, property2 } = object
 * - Creates new variables: name, age, isloggedin
 * - Can now use these variables directly
 *
 * Example breakdown:
 * const { name, age, isloggedin } = user;
 * - name = "John Doe"
 * - age = 30
 * - isloggedin = true
 *
 * Advantages:
 * - Very clean and readable
 * - Useful when using only certain properties
 * - Common in modern JavaScript
 *
 * When to use:
 * - When you only need specific properties
 * - When you'll use those properties multiple times
 * - To make code more readable
 *
 * Output:
 * Name: John Doe, Age: 30, Logged In: true
 */
console.log("\n===== Method 7: Destructuring =====");
const { name, age, isloggedin } = user;
console.log(`Name: ${name}, Age: ${age}, Logged In: ${isloggedin}`);
/**
 * METHOD 8: Direct console.log()
 * ================================
 *
 * How it works:
 * - Log the entire object directly without processing
 * - JavaScript automatically formats it for console
 * - Browser console shows it as expandable/collapsible object
 *
 * Output (in browser console):
 * { name: 'John Doe', age: 30, isloggedin: true }
 *
 * Advantages:
 * - Quickest way to inspect an object
 * - In browser console, you can expand and explore nested properties
 * - Good for quick debugging
 *
 * When to use:
 * - Quick debugging during development
 * - When you want to see the raw object
 * - Fastest to type
 */
console.log("\n===== Method 8: Direct console.log() =====");
console.log(user);
