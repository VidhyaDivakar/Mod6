
//creating product base class
class Product { // Pascal Case convention for class names in typescript
sku: string;
name: string;
price: number;
constructor(sku: string, name: string, price: number) {
this.sku = sku;
this.name = name;
this.price = price;
}

displayDetails(): string {
return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
}
getPriceWithTax(taxRate: number = 0.1): number {
return this.price * (1 + taxRate);  
}
}
module.exports = Product;

const p1 = new Product("SKU123", "Laptop", 1000);
console.log(p1.displayDetails());
console.log(p1.getPriceWithTax());