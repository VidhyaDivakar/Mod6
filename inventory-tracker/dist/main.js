"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
const products = [
    new PhysicalProduct_1.PhysicalProduct("SKU001", "Laptop", 1000, 2.5),
    new DigitalProduct_1.DigitalProduct("SKU002", "Ebook", 50, 15)
];
// Loop through products
for (const product of products) {
    console.log(product.displayDetails());
    const finalPrice = (0, taxCalculator_1.calculateTax)(product);
    console.log(`Final Price: $${finalPrice}`);
    // Type-specific details
    if (product instanceof PhysicalProduct_1.PhysicalProduct) {
        console.log(`Weight: ${product.formatWeight}`);
    }
    if (product instanceof DigitalProduct_1.DigitalProduct) {
        console.log(`File Size: ${product.formattedFileSize}`);
    }
    console.log("----------------------");
}
