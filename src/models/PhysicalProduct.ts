// Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.


// Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
import type { DiscountableProduct } from "./DiscountableProduct";
import Product from "./Product.ts";
// Add a weight property (number) for physical products.
export default class PhysicalProduct extends Product implements DiscountableProduct{
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
 //apply discount
    applyDiscount(discountInPercent: number): void{
        if(discountInPercent < 0 || discountInPercent > 1){
            throw new Error(`Discount is invalid: ${discountInPercent}`);
        }
        this.price = this.price * (1- discountInPercent)
        
    }

    //apply bulk discount
    bulkDiscounts(): void{
       const weightKg = this.weight / 2.05
       if(weightKg > 10){
        
        this.applyDiscount(0.07);
       }
    }

}



