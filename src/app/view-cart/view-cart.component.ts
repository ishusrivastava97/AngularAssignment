import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}
@Component({
  selector: 'app-view-cart',
  standalone: true,
  imports: [CartItemComponent, FooterComponent, FormsModule],
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css'],
})
export class ViewCartComponent implements OnInit {
  
  cart: CartItem[] = [];
  total: number = 0;


  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart: CartItem[]) => {
      this.cart = cart;
      this.updateTotal();
    });
 
  }
  onContinueShopping() {
    this.router.navigate(['/all-products']);
  }
  removeCartItem(itemId: number) {
    this.cart = this.cart.filter((item) => item.id !== itemId);
    this.cartService.removeItem({ id: itemId, name: '', price: 0 });
    this.updateTotal();
  }
  updateCartQuantity(event: { id: number; quantity: number }) {
    const item = this.cart.find((cartItem) => cartItem.id === event.id);
    if (item) {
      item.quantity = event.quantity;
    }
    this.updateTotal();
  }
  updateTotal() {
    this.total = this.cart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
  }

  pincode: string = ''; 
  shipping: boolean = false;
  COD: boolean = false;
  fiveDays: boolean = false;
  numericPincode: number = 0;
  onSubmit() {
    this.numericPincode = Number(this.pincode); 



    this.resetConditions(); 

    if (this.numericPincode >= 100000 && this.numericPincode <= 250000) {
      this.shipping = true;
    }
    if (this.numericPincode >= 250001 && this.numericPincode <= 500000) {
      this.shipping = true;
      this.COD = true;
    }
    if (this.numericPincode >= 500001 && this.numericPincode <= 999999) {
      this.shipping = true;
      this.COD = true;
      this.fiveDays = true;
    }
  }

  resetConditions() {
    this.shipping = false;
    this.COD = false;
    this.fiveDays = false;
  }
}
