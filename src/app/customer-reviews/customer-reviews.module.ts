import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerReviewsComponent } from './customer-reviews.component';



@NgModule({
  declarations: [
    CustomerReviewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerReviewsComponent
  ]
})
export class CustomerReviewsModule { }
