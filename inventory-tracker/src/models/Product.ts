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