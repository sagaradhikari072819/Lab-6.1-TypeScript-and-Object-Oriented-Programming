// Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.

// Use a getter method to return the formatted file size in megabytes.....

import Product from "./Product.ts";

export default class DigitalProduct extends Product{
    fileSize: number;
// Add a fileSize property (number) for digital products.
    constructor(sku: string, name: string, price: number, fileSize: number){
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    // Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
    getpriceWithTax(): number {
    return this.price 
}
get formattedFileSize(){
    return this.fileSize/(1024 * 1024) + " MB";
}

}