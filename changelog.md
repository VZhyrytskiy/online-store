Task 1 - Introduction

FirstComponent was created with the following structure:
 {
  id: number;
  name: string;
  price: number;
  description: string;
  category: Category;
  isAvailable: boolean;
  sizes: Size[];
  colors: string[];
  picture: string;
 }
 In order to see this component on the web page, uncomment
 <app-first></app-first> in app.component.html or add a route in app-routing.module.ts

Enums Category and Size are used throughout the app:

enum  Category {
    LongSleeves,
    CropTops,
    Jackets,
    Sweatpants,
    Tights,
    Hoodies
  }

  enum Size {
    XS,
    S,
    M,
    L,
    XL
}

ProductComponent has the following structure:

It uses ProductModel {
    id: number;
    name: string;
    price: number;
    description: string;
    category: Category;
    isAvailable: boolean;
    sizes: Size[];
    colors: string[];
    picture: string;
}

and has a couple of additional properties, such as   
@Input() color: string, @Input() size: Size,
which hold information about the chosen color and size respectfully. This is needed 
in order to pass information further to CartItemComponent {
    product: ProductModel;
    quantity: number;
    size: Size;
    color: string;
} when adding items to cart. 

ProductComponent also has the Buy button, which transforms ProductModel to CartItemModel
and adds it to cart. If the item is not available, component does not display the Buy button.
It will only be added to cart, if size and color options are chosen. If not, an alert will show up.

ProductListComponent displays all the Products added to the products array
in products.service.ts using *ngFor directive.

In the cart, all the items added to cart are displayed, along with the total sum.
There is also an option of removing an item from cart. 
