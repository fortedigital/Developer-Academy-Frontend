import { dummyPizzas } from "../data/dummyPizzas";
import { IPizza } from "../interfaces/pizza";

/* export const fetchAllPizzas = async (): Promise<IPizza[]> => {
  return fetch('https://kjetilpizzaapi.azurewebsites.net/api/pizza')
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
}; */

export const fetchAllPizzas = async (): Promise<IPizza[]> => {
  return new Promise((resolve) => {
    resolve(dummyPizzas);
  });
};
