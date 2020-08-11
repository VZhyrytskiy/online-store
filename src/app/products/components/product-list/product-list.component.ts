import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../../shared/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: ProductModel[];




  constructor(private service: ProductsService) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  // этот метод не используется в шаблоне, а значит его не надо делать публичным
  // мтеоды располагаются обычно после конструктора
  private getProducts(): void {
    this.products = this.service.getProducts();
  }
}
