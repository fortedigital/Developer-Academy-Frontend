import { dummyOrders } from "../data/dummyOrders";
import { IOrder } from "./../interfaces/order";

/* export const fetchUserOrders = async (userId?: number): Promise<IOrder[]> => {
  return fetch(`https://kjetilpizzaapi.azurewebsites.net/api/orders/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
}; */

export const fetchUserOrders = async (userId?: number): Promise<IOrder[]> => {
  return new Promise((resolve) => {
    resolve(dummyOrders);
  });
};
