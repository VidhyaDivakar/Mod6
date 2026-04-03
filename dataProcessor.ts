// Activity: Use Advanced Types in a Web Application
// Implement a function that takes a union type of string[] 
// or number[] and returns a formatted string.
// If the input is string[], return a comma-separated list of uppercase strings.
//If the input is number[], return a comma-separated list of numbers rounded to two decimal places.
// Use type guards to distinguish between string[] and number[].
// Add a type alias for the union type to keep the code concise.
//Answer - Type Alias gives a name to a type (data type) `type Data = string[]
// Answer Type guard = checks which type is being used at runtime type Data = string[]
type inputValue = string[] | number[];

function unionAdvTypes(value: inputValue): string {
    let result: string[] = [];
    if (typeof value[0] === "string") {
        for(let item of value){
            result.push((item as string).toUpperCase());
        }
    } else if (typeof value[0] === "number") {
        for(let item of value){
            result.push((item as number).toFixed(2));
        }
    }
    return result.join(", ");
}

