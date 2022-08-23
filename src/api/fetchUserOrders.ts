import { dummyOrders } from "../data/dummyOrders";
import { IOrder } from "./../interfaces/order";

export const fetchUserOrders = async (userId?: number): Promise<IOrder[]> => {
  // TODO: Hent og returner bestillinger fra API istedenfor fra dummy-data
  // Kombiner API-endepunkt med userID-parameter
  return dummyOrders;
};
