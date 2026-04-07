"use strict";
// Try Catch Finally Error Block
Object.defineProperty(exports, "__esModule", { value: true });
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
try {
    console.log(divideNumbers(10, 0));
    // Force an error
    throw new Error("Something Broke!");
}
catch (error) {
    console.log("An error occurred: ", error.message);
}
finally {
    console.log("Operation Attempted.");
}
//# sourceMappingURL=errorHandle.js.map