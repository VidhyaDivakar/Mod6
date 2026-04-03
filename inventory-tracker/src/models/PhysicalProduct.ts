
//creating subclass for physical products
import { Product } from "../models/Product";
export class PhysicalProduct extends Product {
weight: number;
constructor(sku: string, name: string, price: number, weight: number) {
super(sku, name, price);
this.weight = weight;
}


// override getPriceWithTax method to  include final price with 10% tax
getPriceWithTax(): number {
    const taxRate = 0.1; // 10% tax
return this.price * (1 + taxRate); // adds 10% tax to the price
}

//get method to return weight in kg
get formatWeight(): string {
return `${this.weight} kg`;
}
}