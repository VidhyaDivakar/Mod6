// The following contains review questions pertaining to your intro to Typescript.
// Once you answer the questions in this File, share your file in the thread.

// ==========================================
// Question:
// True or False
// The following will console.log "words" in your terminal/console If you run "node typescriptChallenge.ts"
// Just as if it was js File.
console.log("words")

//Answer Below

True
// ==========================================
// Question:
// What is the purpose of Typscript

//Answer
Typescript is a superset of JavaScript. The main purpose is this adds value to JavaScript by providing static type declarations.

// TypeScript is static 
// ==========================================
// Question: In your own words, what's the difference between TypeScript and JavaScript? (Flexibility, Static, etc.)

//Answer Below


THe main difference between TypeScript and JavaScript is that TypeScript is a statically typed language, while JavaScript is dynamically typed. This means that in TypeScript, you can declare the types of variables, function parameters, and return values. TS finds error at compile time and JS finds error at requestAnimationFrame.
// ==========================================
// Question:
// Identify the items below by type:
// String, Number, Bool, Array, Tupple, Enum

//1.
let movies: string[] = ["The Dark Knight", "Sinners", "Avatar"];
Array
//2.
let isValid: boolean = false;
Bool
//3.
let userData: [string, string] = ["Guy", "guy@yahoo.com"]
Array
//4.
let age: number = 45;
Number
//5.
let lotto: Array<number> = [15, 30, 37, 38, 45, 47]
Array
//6.
enum Role {
  Admin,
  User,
  Guest,
}
enum
let userRole: Role = Role.Admin;
 
console.log(userRole);

//Answer Below

Role.Admin

// ==========================================
// Question: When creating a project, what does "npm init -y" do?

//Answer Below

Intializes the TS project with npm

// ==========================================
// Question: In the function below, which is the "optional parameter"?
function logMessage(message: string, level?: string): void {
  const logLevel = level || "info";
  console.log(`[${logLevel.toUpperCase()}] ${message}`);
}

logMessage("System started");
logMessage("System error", "error");

//Answer Below



// ==========================================
// Question: What is the difference between a optional parameter and default parameter? Give an example.
//Answer Below



// ==========================================
// Question:
// Identify the items below by type:
// Function, Interface, Type Alias

//1.
interface Button {
  label: string;
  onClick: () => void;
}

//2.
function add(a: number = 0, b: number = 0): number {
  return a + b;
}

//3.
type ProductID = string | number;

let id1: ProductID = "ABC123";
let id2: ProductID = 456;

console.log(`Product IDs: ${id1}, ${id2}`);

//Answer Below



// ==========================================
// Question: What are the 4 pillars of Object Oriented Programming?

//Answer Below