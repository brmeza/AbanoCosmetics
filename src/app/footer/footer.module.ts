import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SectInfoComponent } from './sect-info/sect-info.component';
import { SectSubsComponent } from './sect-subs/sect-subs.component';

@NgModule({
  declarations: [
    FooterComponent,
    SectInfoComponent,
    SectSubsComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
