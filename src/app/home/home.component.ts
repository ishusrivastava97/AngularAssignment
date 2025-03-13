import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExploreComponent } from "./explore/explore.component";
import { FooterComponent } from "../footer/footer.component";
import { ApiServiceService } from '../all-products/api-service.service';
import { DisplayCardsComponent } from "../all-products/display-cards/display-cards.component";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExploreComponent, FooterComponent, DisplayCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  treandingProducts!: any[];
  constructor(
    private router: Router,
    private apiServices: ApiServiceService,
    private cartService: CartService
  ) {}
  onBuyNow() {
    this.router.navigate(['/all-products']);
  }
  ngOnInit(): void {
    this.apiServices.getdata().subscribe((product) => {
      this.treandingProducts = product.slice(0, 3);
    });
  }
  goToProductDetails(productId: number) {
    this.router.navigate(['/all-products', productId]);
  }
  addToCart(item:any) {
    this.cartService.addToCart(item);
    this.router.navigate(['/view-cart']);
  }
}
