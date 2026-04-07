"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const Product_1 = require("./Product");
class DigitalProduct extends Product_1.Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price); // mandatory call to the parent class constructor
        this.fileSize = fileSize; // since we have a new property, we need to initialize it in the constructor
    }
    getPriceWithTax() {
        return this.price;
    }
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
}
exports.DigitalProduct = DigitalProduct;
//# sourceMappingURL=DigitalProduct.js.map