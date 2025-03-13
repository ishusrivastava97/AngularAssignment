import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchService } from '../../navigation-bar/search.service';
import { ApiServiceService } from '../../all-products/api-service.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  standalone: true,
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() id!: any;
  @Output() removeItem = new EventEmitter<number>();
  @Output() quantityChanged = new EventEmitter<{
    id: number;
    quantity: number;
  }>();
  quantity = 1;
  minus = 0;

 
  constructor(private searchByData: ApiServiceService) {}
  product: any;
  ngOnInit(): void {
    this.searchByData.getProduct(this.id).subscribe((prod) => {
      this.product = prod;
      console.log(this.product);
    });
  }
  subtotal(): number {
    const subtotal = this.quantity * this.product?.price;

    return subtotal;
  }
  incrementQuantity() {
    this.quantity++;
    this.quantityChanged.emit({ id: this.id, quantity: this.quantity });
  }
  decrementQuantity() {
    if (this.quantity === 1) {
      return;
    }
    this.quantity--;
    this.quantityChanged.emit({ id: this.id, quantity: this.quantity });
  }
  deleteItem() {
    this.removeItem.emit(this.id);
  }
}
