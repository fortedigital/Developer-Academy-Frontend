import { IOrder } from './../interfaces/order';

export const fetchUserOrders = async (userId: number): Promise<IOrder[]> => {
  // TODO: Hent og returner bestillinger fra API istedenfor fra dummy-data
  return fetch(`https://kjetilpizzaapi.azurewebsites.net/api/orders/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
};
