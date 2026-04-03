import { Product } from "./models/Product";

const p1 = new Product("SKU123", "Laptop", 1000);

console.log(p1.displayDetails());
console.log(p1.getPriceWithTax());