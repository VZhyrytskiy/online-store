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

  getProducts(): void {
    this.products = this.service.getProducts();
  }

  constructor(private service: ProductsService) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

}
