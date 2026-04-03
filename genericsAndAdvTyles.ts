// Basic Example: Generic Function
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("Hello, Generics!")); // Output: Hello, Generics!
console.log(identity<number>(42)); // Output: 42


// Example of a generic Array Function
function getFirstElement<T>(arr: T[]): T {
    return arr[1];
}
console.log(getFirstElement<string>(["apple", "banana", "cherry"])); // Output: banana
console.log(getFirstElement<number>([1, 2, 3])); // Output: 2