import { Injectable } from '@angular/core';
import { ProductModel, Category, Size } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  products: ProductModel[] = [
    {
      id: 1,
      name: 'Oversized Hoodie',
      price: 72,
      description: 'This entirely recycled piece features deep front pockets and a longer silhouette designed to cover you in the places you want covering.',
      category: Category.Hoodies,
      isAvailable: true,
      sizes: [Size.XS, Size.S],
      colors: ['black', 'grey', 'sand'],
      picture: 'assets/img2.jpg'
    },
    {
      id: 2,
      name: 'Daily Crop Tee',
      price: 44,
      description: 'With a cropped, relaxed fit and soft feel thanks to our Aer+ Supima Cotton fabric, cool down in comfort after or during your sweaty workout.',
      category: Category.CropTops,
      isAvailable: true,
      sizes: [Size.XS, Size.S, Size.L],
      colors: ['black', 'blue', 'white'],
      picture: 'assets/img3.jpg'
    },
    {
      id: 3,
      name: 'Seamless Legacy Long Sleeve',
      price: 62,
      description: 'Built using a custom fabric blend that is both buttery soft and supportive.',
      category: Category.LongSleeves,
      isAvailable: false,
      sizes: [Size.M, Size.L],
      colors: ['black'],
      picture: 'assets/img1.jpg'
    }
  ];

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }

}
