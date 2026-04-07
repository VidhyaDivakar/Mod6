import Product from "./product";
export default class PhysicalProduct extends Product {
    weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    displayDetails(): string;
}
//# sourceMappingURL=phyProducts.d.ts.map