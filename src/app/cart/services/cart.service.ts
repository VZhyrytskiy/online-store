import { Injectable } from '@angular/core';
import { ProductModel, CartItemModel } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  boughtItems: CartItemModel[] = [];

  addToCart(product: CartItemModel) {
    this.boughtItems.push(product);
  }

  getItems() {
    return this.boughtItems;
  }

  removeFromCart(product: CartItemModel) {
    this.boughtItems.splice(this.boughtItems.indexOf(product), 1);
  }

  clearCart() {
    this.boughtItems = [];
    return this.boughtItems;
  }

  getTotal() {
    let total = 0;
    for (const item of this.boughtItems) {
      total += item.product.price * item.quantity;
    }
    return total;
  }

  constructor() { }
}
