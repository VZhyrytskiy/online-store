import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Category, Size, ProductModel, CartItemModel } from '../../../shared/models';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Input() color: string;
  @Input() size: Size;

  clickMessage = '';
  Category = Category;
  Size = Size;
  item: CartItemModel;
  colorControl = new FormControl('', Validators.required);
  sizeControl = new FormControl('', Validators.required);

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  addToCart(product: ProductModel) {
    if (this.size === undefined || this.color === undefined) {
      window.alert('Choose color and size!');
      return;
    }
    this.item = {
      product,
      size: this.size,
      color: this.color,
      quantity: 1
    };
    this.cartService.addToCart(this.item);
    this.clickMessage = 'You just bought ' + this.item.product.name;
    console.log(this.clickMessage);
    window.alert('Your product has been added to the cart!');
  }

}
