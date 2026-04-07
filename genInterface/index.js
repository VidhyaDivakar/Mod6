"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    content;
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
const stringBox = new Box("Hello, TypeScript!");
const numberBox = new Box(42);
console.log(stringBox.getContent()); // Output: Hello, TypeScript!
console.log(numberBox.getContent()); // Output: 42
//# sourceMappingURL=index.js.map