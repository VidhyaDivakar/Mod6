"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
//creating product base class
class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
    }
    getPriceWithTax(taxRate = 0.1) {
        return this.price * (1 + taxRate);
    }
}
exports.Product = Product;
const p1 = new Product("SKU123", "Laptop", 1000);
console.log(p1.displayDetails());
console.log(p1.getPriceWithTax());
//# sourceMappingURL=Product.js.map