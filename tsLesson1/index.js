"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const physical_product_1 = __importDefault(require("./physical-product"));
const phone = new physical_product_1.default("P123", "Smartphone", 699, 0.5);
console.log(phone.displayDetails());
//# sourceMappingURL=index.js.map