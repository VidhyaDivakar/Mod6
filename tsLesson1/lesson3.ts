
class Product { // this is the blueprint for creating product objects; no obj yet just structuire
  name: string;
  price: number;
  inStock: boolean;

  // constructor method and takes 3 inputs; default takes true
constructor(name: string, price: number, inStock: boolean = true) {
this.name = name; // this current object being created! assigns value to the name prop of the obj
this.price = price;
this.inStock = inStock;
}
// method to display product details
displayDetails(): string {
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

import PhysicalProduct from "./physical-product";
  
const phone = new PhysicalProduct("P123", "Smartphone", 699, 0.5);
console.log(phone.displayDetails());

console.log("The price of the phone is: " + phone.price);
phone.price = 1000;
console.log("The new price of the phone is: " + phone.price);