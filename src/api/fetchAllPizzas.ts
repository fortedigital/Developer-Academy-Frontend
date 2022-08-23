import { IPizza } from '../interfaces/pizza';

export const fetchAllPizzas = async (): Promise<IPizza[]> => {
  // TODO: Hent og returner pizzaer fra API istedenfor fra dummy-data
  return fetch('https://kjetilpizzaapi.azurewebsites.net/api/pizza')
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
};
