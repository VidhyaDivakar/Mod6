class Box<T> {
    content: T;
    constructor(content: T) {
        this.content = content;
    }
    getContent(): T {
        return this.content;
    }
    }
    const stringBox = new Box<string>("Hello, TypeScript!");
    const numberBox = new Box<number>(42);

    console.log(stringBox.getContent()); // Output: Hello, TypeScript!
    console.log(numberBox.getContent()); // Output: 42