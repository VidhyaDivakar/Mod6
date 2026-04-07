
let userdefinedname1: string = "AnyAlpha";

let userdefinednamefornumber1: number =  89;

let username: string= "Fincy;"
let userage: number = 30;
let userStatus: boolean = true;

let userInfo: string[] = ["Fincy","StatusActive"];
let userInfo12: (string | number) [] = ["evie", 43, "Girl"];
let userTuple: [string, number, boolean] = ["Fincy", 30, true];

let userInfo2: (string | number) [] = ["Yellay", 42, "StatusInactive"];

let userInfor3: Array<string> = ["Angel", "StatusInactive"];

let userInfor4: Array<string | number> = ["Lin", 28, "StatusActive"];

let userInforObj: { name: string, age: number, userID: number, orderID: string}[] = [
    { name: "Fincy", age: 30, userID: 123, orderID: "ORD001" },
    { name: "Yellay", age: 42, userID: 456, orderID: "ORD002" },
    { name: "Angel", age: 25, userID: 789, orderID: "ORD003" },
    { name: "Lin", age: 28, userID: 321, orderID: "ORD004" }
]

enum testResults {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

let actualResult: testResults = testResults.Success;
console.log("Actual Result:", actualResult); // Output: Actual Result: 200

//{..} Obj type / obj literal. Inside items are property signature


function callUser1(name: string, age: number): string  {
    return `Hello ${name}, you are ${age} years old.`;
}
console.log(callUser1("Fincy", 30));


function add(a:number, b: number): number {
    return a+b;
    }
console.log(add(5, 10));

const ES6ArrowFunction = (name: string, age:number) => "Hello," + name + ", you are"+ age + "years old."
let greeting: string = ES6ArrowFunction("Fincy", 30);
console.log(greeting); 

interface User {
    name: string;
    age: number;
    email: string;
}
const user: User = { name: "Fincy", age: 30, email: "fincy@example.com" };
console.log(user);

