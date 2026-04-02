export default class Product {
  private sku: string;
  public name: string;
  protected price: number;

constructor(sku: string, name: string, price: number) {
this.sku = sku;
this.name = name;
this.price = price;
}

protected displayDetails(): string {
return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
}
}