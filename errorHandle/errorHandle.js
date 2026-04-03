// Try Catch Finally Error Block

try {
    console.log("Try")

    // Force an error
    throw new Error("Something Broke!")

} catch (error){
    console.log("Catch")
} finally {
    console.log("Finally")
}