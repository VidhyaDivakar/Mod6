// Try Catch Finally Error Block

function divideNumbers(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }   
    return a / b;
}

try {
    console.log(divideNumbers(10, 0));

    // Force an error
    throw new Error("Something Broke!")

} catch (error){
    console.log("An error occurred: ", error.message);
} finally {
    console.log("Operation Attempted.");
}