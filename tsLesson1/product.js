"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.default = Product;
//# sourceMappingURL=product.js.map