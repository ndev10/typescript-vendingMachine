/// <reference path="product.ts" />

class productFactory {
    static GetProduct(): CocaCola {
        return new CocaCola();
    }    
}