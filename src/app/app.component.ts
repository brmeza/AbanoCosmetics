import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { BannerModule } from './banner/banner.module';
import { ProductsModule } from './products/products.module';
import { CustomerReviewsModule } from './customer-reviews/customer-reviews.module';
import { FooterModule } from './footer/footer.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarModule, BannerModule, ProductsModule, CustomerReviewsModule, FooterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AbanoCosmetics';
}
