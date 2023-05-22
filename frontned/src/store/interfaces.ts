interface ExtraStats {
  quantity: number;
  total: number;
}

export interface Product extends ExtraStats {
  name: string;
  img: string;
  id: number;
  price: number;
  texture: string;
  weight: string;
  dimensions: string;
  description: string;
}

export interface InitialState {
  cartState: boolean;
  burgerMenu: boolean;
  notifcation: boolean;
  cart: {
    quantity: number;
    items: Product[];
    sum: number;
  };
}
