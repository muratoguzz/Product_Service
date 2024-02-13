import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1, "Iphone 12", "Telefon", 35000),
            new Product(2, "Iphone 13", "Telefon", 40000),
            new Product(3, "Iphone 14", "Telefon", 45000),
            new Product(4, "Iphone 15", "Telefon", 50000)
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}


