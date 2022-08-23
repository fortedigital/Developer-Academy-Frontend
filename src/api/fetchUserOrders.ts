import { IOrder } from './../interfaces/order';

export const fetchUserOrders = async (userId: number): Promise<IOrder[]> => {
  //TODO: Fetch Pizza from Azure API
  //Tips: Hvis du får problemer med Cross-Origin Resource Sharing, bruk mode: no-cors i fetchen.
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
