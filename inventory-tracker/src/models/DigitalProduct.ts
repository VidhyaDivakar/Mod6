import { Product } from "./Product";

export class DigitalProduct extends Product {
  fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price); // mandatory call to the parent class constructor
    this.fileSize = fileSize; // since we have a new property, we need to initialize it in the constructor
  }
 
  getPriceWithTax(): number { // this function returns (number type)the price of the digital product with tax included
    return this.price; 
  }

  
  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }
}