"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
class PhysicalProduct extends product_1.default {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    displayDetails() {
        return super.displayDetails() + ` It weighs ${this.weight} kg.`;
    }
}
exports.default = PhysicalProduct;
//# sourceMappingURL=phyProducts.js.map