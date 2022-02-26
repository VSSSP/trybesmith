export interface Order {
  userId: number;
  products: number[];
}

export interface Orders {
  id: number;
  userId: number;
  products: number[];
}

export interface OrderIds {
  id: number;
  userId: number;
}

export interface Product {
  id: number;
}