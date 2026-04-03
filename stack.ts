// Activity: Create a Generic Stack Data Structure

class Stack<T> {
    items: T[] = [];
    push(item: T): void {
    this.items.push(item);
}
}
const numberStack = new Stack<number>();
console.log(numberStack.items); // Output: []
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.items); // Output: [1, 2]

// String Stack

const stringStack = new Stack<string>();
console.log(stringStack.items); // Output: []
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.items); // Output: ["Hello", "World"]   


// Pop method to remove and return the top item from the stack
//class className<T> {
//    variableName: T[] = [];
// methodName(variableName: T): void {
//     this.items.push(item);
// }
class StackPop <G> {
    items: G[] = [];
    push(item: G): void {
        this.items.push(item);
    }
    pop(): G | undefined {
        return this.items.pop();
    }
     peek(): G | undefined {
        return this.items[this.items.length - 1];
    }
}

// Peak Test
// Goal is to take a look at the last item before I remove it.
 // Should Show me 25

console.log("Stack with Number Pop method:");
const numberStackPop = new StackPop<number>();
console.log(numberStackPop.items);
console.log("Number I'm Peaking at:", numberStackPop.peek());
numberStackPop.push(23);
console.log("after pushing 23:", numberStackPop.items);
numberStackPop.push(53);
numberStackPop.push(3);
console.log(numberStackPop.pop()); // Output: 3
console.log("Stack with string Pop method:");
const stringStackPop = new StackPop<string>();
console.log(stringStackPop.items);
stringStackPop.push("Bunny");
stringStackPop.push("Cat");
stringStackPop.push("Dog");
console.log(stringStackPop.pop()); // Output: "Dog"
console.log(stringStackPop.pop()); // Output: "Cat"
