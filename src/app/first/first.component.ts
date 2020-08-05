import { Component, OnInit } from '@angular/core';
import { Category, Size } from '../shared/models';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})


export class FirstComponent implements OnInit {

  Category = Category;
  Size = Size;
  sizeControl = new FormControl('', Validators.required);
  colorControl = new FormControl('', Validators.required);
  id = 1;
  name = 'High waist tights';
  price = 55;
  description = 'A perfect partner for hitting the gym or hitting the road. They’re squat-proof, yet cozy enough.';
  category: Category = Category.Tights;
  isAvailable = true;
  sizes: Size[] = [Size.S, Size.M, Size.XL];
  colors: string[] = ['black', 'beige', 'pink'];
  picture = '../assets/images/img1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
