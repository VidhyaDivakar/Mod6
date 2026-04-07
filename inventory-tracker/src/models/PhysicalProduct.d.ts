import { Product } from "../models/Product";
export declare class PhysicalProduct extends Product {
    weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    getPriceWithTax(): number;
    get formatWeight(): string;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map