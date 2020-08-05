
export enum Size {
    XS,
    S,
    M,
    L,
    XL
}

export enum  Category {
    LongSleeves,
    CropTops,
    Jackets,
    Sweatpants,
    Tights,
    Hoodies
  }

export interface ProductModel {
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

export interface CartItemModel {
    product: ProductModel;
    quantity: number;
    size: Size;
    color: string;
}
