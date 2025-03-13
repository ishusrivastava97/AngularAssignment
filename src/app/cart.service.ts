import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface CartItem {
  id: number;
  name: string;
  price: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cart);

  constructor() {}
  getCartDetails() {
    return this.cart;
  }
  addToCart(item: CartItem) {
    this.cart.push(item);
    this.cartSubject.next([...this.cart]);
  }

  getCart() {
    return this.cartSubject.asObservable();
  }

  removeItem(item: CartItem) {
this.cart = this.cart.filter((item) => item.id !== item.id);
this.cartSubject.next([...this.cart]);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }
}
