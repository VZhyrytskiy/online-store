import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Category, Size, CartItemModel } from '../../../shared/models';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  items: CartItemModel[];
  Size = Size;
  total: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  removeFromCart(product: CartItemModel) {
    this.cartService.removeFromCart(product);
    this.total = this.cartService.getTotal();
  }

}
