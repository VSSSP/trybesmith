export interface InputProduct {
  name: string,
  amount: string,
}

export interface Product extends InputProduct {
  id: number,
}