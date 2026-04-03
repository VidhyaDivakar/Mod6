"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const p1 = new Product_1.Product("SKU123", "Laptop", 1000);
console.log(p1.displayDetails());
console.log(p1.getPriceWithTax());
