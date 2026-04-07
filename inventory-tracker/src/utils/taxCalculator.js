"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
const Product_1 = require("../models/Product");
function calculateTax(product) {
    return product.getPriceWithTax();
}
//# sourceMappingURL=taxCalculator.js.map