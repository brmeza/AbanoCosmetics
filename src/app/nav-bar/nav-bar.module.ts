import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    NavBarComponent,SearchComponent, MenuComponent
  ],
  exports:[
    NavBarComponent
  ]
})
export class NavBarModule { }
