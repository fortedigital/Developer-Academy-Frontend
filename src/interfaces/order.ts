export interface IOrder {
  orderId: number;
  pizza: string[];
  price: number;
}

export interface IPostOrder {
  userId?: number;
  pizzaIds: number[];
}
