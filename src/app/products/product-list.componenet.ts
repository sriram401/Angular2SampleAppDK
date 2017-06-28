import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component(
    {
        moduleId : module.id,
        //selector : "pm-products",
        templateUrl : "product-list.component.html",
        styleUrls : ["product-list.component.css"]
    }
)
export class ProductListComponent implements OnInit{

    listFilter : string = "";
    pageTitle : string  = "Product List!";
    imageWidth : number = 50;
    imagemargin : number = 2;
    showImage : boolean = false;
    products : IProduct[];
    errorMessage : any;

    constructor(private _productService : ProductService)
    {
        
    }

    private toggleImage()
    {
        this.showImage = !this.showImage;
    }

    ngOnInit(){
        console.log("Initializing ProductListComponent....");
        this._productService.getProducts()
        .subscribe(
        products => this.products = products,
        error => this.errorMessage = <any>error
        );
    }

    onNotify(message : string) : void{
        console.log('Message from star component to product list conponent' + message);
    }

}