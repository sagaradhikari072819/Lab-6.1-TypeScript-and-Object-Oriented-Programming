// Properties: sku (string), name (string), price (number).
// Methods:
import{calculateTax} from "../utils/taxCalculator"
export default class Product {
    sku: string;
    name: string;
    price: number;

    constructor (sku: string, name: string, price: number){
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

// displayDetails() - a method that returns a formatted string with the product’s details.

displayDetails(): string{
    return `sku: ${this.sku} name: ${this.name} price: ${this.price}`
}

// getPriceWithTax() - a method that calculates the final price of the product with tax.

getPriceWithTax(): number {
    return this.price + ((this.price * taxRate)/100)
}
}