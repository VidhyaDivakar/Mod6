function logMessage(message: string, level?: string): void {
  const logLevel = level || "info";
  console.log(`[${logLevel.toUpperCase()}] ${message}`);
}

logMessage("System started"); // Defaults to "info"
logMessage("System error", "error"); // Uses "error"

// Define function signatures (overloads)
function formatInput(input: string): string;
function formatInput(input: string[]): string;

// Implement the function to handle both signatures
function formatInput(input: string | string[]): string {
if (typeof input === "string") {
return input.toUpperCase();
} else {
return input.join(", ").toUpperCase();
}
}

console.log(formatInput("hello")); // Outputs: "HELLO"
console.log(formatInput(["apple", "banana"])); // Outputs: "APPLE, BANANA"