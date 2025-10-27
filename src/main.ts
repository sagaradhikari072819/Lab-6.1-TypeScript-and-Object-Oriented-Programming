// import './style.css'

// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.

import PhysicalProduct from "./models/PhysicalProduct";
import DigitalProduct from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";
import { sortProductByPrice } from "./utils/sortingProduct.ts";

// creat multiple physical products
const Keyboard = new PhysicalProduct('ABC001', 'gamilng keybord', 50, 40);
const laptop = new PhysicalProduct('ABC002', 'dell', 10, 1200)

//creating multiple disital products (sku: string, name: string, price: number, fileSize: number)
const netflix =  new DigitalProduct('xyz001', 'membership', 10, 1999,)
const youtube =  new DigitalProduct('xyz02', 'membership', 15, 9111,)

//store them all in one array(type inferred as base class product[])
const myProducts = [Keyboard, laptop, netflix, youtube]



// Apply bulk discounts
for (const product of myProducts) {
    if (product instanceof PhysicalProduct) {
        product.bulkDiscounts();
    }
}

 //sort product by price
 const sortProducts = sortProductByPrice(myProducts);

let counter: number;
counter = 1;
for (const product of sortProducts) {
     console.log(` Product # ${counter}`);
   //common properties to both products (physical and digital)
    console.log(`Name: ${product.name} | SKU: ${product.sku} `);
   
    
    if (product instanceof PhysicalProduct) {
         console.log(`Price With Bulk Discount (if available): $${product.price}`);
        console.log(`Weight: ${product.weightInKg} kg`);
        
    } else if (product instanceof DigitalProduct) {
        console.log(`Digital Product Price: $${product.price}`);
        
        console.log("File Size:", product.formattedFileSize);
    }

    // Polymorphic behavior
    console.log("Price with Tax: $" + calculateTax(product).toFixed(2)); 

    console.log();
    counter++;
}
