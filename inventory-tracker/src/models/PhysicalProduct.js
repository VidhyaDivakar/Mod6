"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
//creating subclass for physical products
const Product_1 = require("../models/Product");
class PhysicalProduct extends Product_1.Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    // override getPriceWithTax method to  include final price with 10% tax
    getPriceWithTax() {
        const taxRate = 0.1; // 10% tax
        return this.price * (1 + taxRate); // adds 10% tax to the price
    }
    //get method to return weight in kg
    get formatWeight() {
        return `${this.weight} kg`;
    }
}
exports.PhysicalProduct = PhysicalProduct;
//# sourceMappingURL=PhysicalProduct.js.map