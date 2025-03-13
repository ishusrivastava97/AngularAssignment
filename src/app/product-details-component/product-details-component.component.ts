import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../all-products/api-service.service';
import { DisplayCardsComponent } from "../all-products/display-cards/display-cards.component";
import { CartService } from '../cart.service';
import { FooterComponent } from "../footer/footer.component";
interface CartItem {

  id: number;
  name: string;
  price: number;
}
@Component({
  selector: 'app-product-details-component',
  standalone: true,
  imports: [DisplayCardsComponent, FooterComponent],
  templateUrl: './product-details-component.component.html',
  styleUrl: './product-details-component.component.css',
})
export class ProductDetailsComponentComponent {
  product: any;
  relatedProducts!: any[];
  public Itemcart: CartItem[] = [];
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['productId'];
      this.apiService.getProduct(productId).subscribe((product) => {
        this.product = product;
        console.log(this.product);
        this.apiService.getdata().subscribe((products) => {
          this.relatedProducts = products.filter(
            (p: any) => p.category === product.category
          );
          this.relatedProducts = this.relatedProducts.slice(0, 3);
        });
      });
    });
  }
  goToProductDetails(productId: number) {
    this.router.navigate(['/all-products', productId]);
  }
  goToCart(item: any) {
    this.Itemcart = this.cartService.getCartDetails();
    console.log(this.Itemcart);

  
    this.cartService.addToCart(item);
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
    this.router.navigate(['/view-cart']);
    console.log(this.Itemcart);
  }
  addedToCart() {
    this.router.navigate(['/view-cart']);
  }
  hasItemInCart(productId: number): boolean {
    return this.Itemcart.find((item) => item.id === productId) !== undefined;
  }
}
