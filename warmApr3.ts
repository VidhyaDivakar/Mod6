//Question 1 Create a function greetUser() that: 
//Takes a name (string)
// Returns "Hello, <name>!"
function greetUser(name: string): string { 
    return `Hello, ${name}!`; // return the greeting message with the user's name
}
console.log(greetUser("Vidhya"));

//Question 2
//Create a function getEvenNumbers that:
//Takes an array of numbers
//Returns a new array with only even numbers

function getEvenNumbers(Array: number[]): number[] { // Number return the array of numbers
    return Array.filter(num => num % 2 === 0); // used a arrow function to filter out the even numbers from the input array
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// Question 3
// Create an interface User with:
// id: number
// name: string
// isActive: boolean
//Then create a function getActiveUsers that:
//Takes an array of User
//Returns only users where isActive is true

interface User {
    id: number;
    name: string;
    isActive: boolean;
}
function getActiveUsers(Array: User[]): User[] {
    return Array.filter(user => user.isActive);
}

const userArray: User[] = [
    { id: 243, name: "Dino", isActive: false },
    { id: 254, name: "Rhino", isActive: true },
    { id: 3, name: "Jackle", isActive: true }
];
console.log(getActiveUsers(userArray)); // Output: [{ id: 254, name: "Rhino", isActive: true }, { id: 3, name: "Jackle", isActive: true }]

//Question 4
//Create a generic function getLastItem that:
//Takes an array of any type
//Returns the last item in the array

function getLastItem <genericT>(Array: genericT[]): genericT | undefined {
    return Array[Array.length - 1]; // Access the last item in the array using its length
}

console.log(getLastItem<number>([1, 2, 3, 4])); // Output: 4
console.log(getLastItem<string>(["apple", "banana", "cherry"])); // Output: "cherry"

//Question 5
//Hard — Promise Chain with Error Handling
//Create a function chain that:
//Takes a number
//Multiplies it by 2
//Multiplies result by 10
//Divides result by 5
//Returns final value

function processNumber(num: number): Promise<number> {
    return Promise.resolve(num)
        .then(result => {
            if (typeof result !== "number") {
                throw new Error("Input must be a number");
            }
            return result * 2;
        })
        .then(result => result * 10)
        .then(result => result / 5)
        .catch(error => {
            console.error("Error:", error.message);
            throw error;
        });
}