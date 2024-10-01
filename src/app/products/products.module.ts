import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipProductsComponent } from './tip-products/tip-products.component';
import { BestProductsComponent } from './best-products/best-products.component';



@NgModule({
  declarations: [
    TipProductsComponent,
    BestProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ 
    TipProductsComponent, 
    BestProductsComponent
  ]
  
})
export class ProductsModule { }
