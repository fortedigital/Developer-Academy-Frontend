import { dummyPizzas } from "../data/dummyPizzas";
import { IPizza } from "../interfaces/pizza";

export const fetchAllPizzas = async (): Promise<IPizza[]> => {
  // TODO: Hent og returner pizzaer fra API istedenfor fra dummy-data
  return dummyPizzas;
};
