"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logMessage(message, level) {
    const logLevel = level || "info";
    console.log(`[${logLevel.toUpperCase()}] ${message}`);
}
logMessage("System started"); // Defaults to "info"
logMessage("System error", "error"); // Uses "error"
// Implement the function to handle both signatures
function formatInput(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else {
        return input.join(", ").toUpperCase();
    }
}
console.log(formatInput("hello")); // Outputs: "HELLO"
console.log(formatInput(["apple", "banana"])); // Outputs: "APPLE, BANANA"
//# sourceMappingURL=index1.js.map