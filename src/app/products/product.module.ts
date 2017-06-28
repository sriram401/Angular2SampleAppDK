import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductDetailComponent } from "./product-detail.component";
import { ProductListComponent } from "./product-list.componenet";
import { ProductFilterPipe } from "./product-filter.pipe";
import { StarComponent } from "../shared/star.component";
import { ProductDetailGuard } from "./product-guard.service";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";


@NgModule(
    {
        declarations : [
            ProductDetailComponent, 
            ProductListComponent, 
            ProductFilterPipe
            ],
        imports : [
            RouterModule.forChild(
                [
                          { path : 'products' , component : ProductListComponent},
                          { path : 'product/:id', canActivate : [ProductDetailGuard] , component : ProductDetailComponent},

                ]
            ),
            SharedModule

            ],
        
        providers  : [ProductDetailGuard, ProductService]

        
    }
)

export class ProductModule{

}