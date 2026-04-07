"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name;
    price;
    inStock;
    // constructor method and takes 3 inputs; default takes true
    constructor(name, price, inStock = true) {
        this.name = name; // this current object being created! assigns value to the name prop of the obj
        this.price = price;
        this.inStock = inStock;
    }
    // method to display product details
    displayDetails() {
        return `${this.name} costs $${this.price} and is ${this.inStock ? "in stock" : "out of stock"}.`;
    }
}
// creates empty object, then calls constructor to fill in the details of the object
const product1 = new Product("Laptop", 1200);
console.log(product1.displayDetails());
//Class 👉 Defines structure (properties) + optional behavior (methods)
// 2. Constructor (optional) 👉 Used to initialize values easily
// 3. Object creation (new) 👉 This is what actually creates data
// 4. Methods (optional) 👉 Display like
//
const physical_product_1 = __importDefault(require("./physical-product"));
const phone = new physical_product_1.default("P123", "Smartphone", 699, 0.5);
console.log(phone.displayDetails());
console.log("The price of the phone is: " + phone.price);
phone.price = 1000;
console.log("The new price of the phone is: " + phone.price);
//# sourceMappingURL=lesson3.js.map