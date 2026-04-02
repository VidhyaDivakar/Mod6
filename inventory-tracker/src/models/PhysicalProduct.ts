//creating subclass for physical products
class PhysicalProduct extends Product {
weight: number;
}

// override getPriceWithTax method to  include final price with 10% tax
getPriceWithTax(): number {
return this.price * 1.1; // adds 10% tax to the price
}

//get method to return weight in kg
get weightInKg(): number {
return this.weight;
}