// Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.


// Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).

import Product from "./Product.ts";
// Add a weight property (number) for physical products.
export default class PhysicalProduct extends Product {
weight: number;

constructor(sku: string, name: string, price: number, weight: number) {
super(sku, name, price);
this.weight = weight;
}
// Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
getpriceWithTax(): number{
    return this.price * 1.10
}
// Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
get weightInKg(){
    return `${this.weight/2.205} KG`;
}

}

// const productInfo = new PhysicalProduct("D-101", "Honda", 50000, 2500);
// console.log(productInfo.displayDetails());