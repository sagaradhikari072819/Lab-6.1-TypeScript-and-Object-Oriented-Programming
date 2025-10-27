// Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.
// Add a function calculateTax() that accepts a Product object and returns the price including tax.
import Product from "../models/Product"; 

export function calculateTax(product: Product){
    return product.getPriceWithTax(); //what r we trying achive here?
}