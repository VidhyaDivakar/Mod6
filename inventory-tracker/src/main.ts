import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { taxCalculator } from "./utils/taxCalculator";

const products = [
  new PhysicalProduct("SKU001", "Laptop", 1000, 2.5),
  new DigitalProduct("SKU002", "Ebook", 50, 15)
];

// Loop through products
for (const product of products) {
  console.log(product.displayDetails());

  const finalPrice = taxCalculator(product);
  console.log(`Final Price: $${finalPrice}`);

  // Type-specific details
  if (product instanceof PhysicalProduct) {
    console.log(`Weight: ${product.formattedWeight}`);
  }

  if (product instanceof DigitalProduct) {
    console.log(`File Size: ${product.formattedFileSize}`);
  }

  console.log("----------------------");
}