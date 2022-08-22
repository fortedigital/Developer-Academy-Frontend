import { IPizza } from "../interfaces/pizza";

export const fetchAllPizzas = async (): Promise<IPizza[]> => {
  //TODO: Fetch Pizza from Azure API
  //Tips: Hvis du får problemer med Cross-Origin Resource Sharing, bruk mode: no-cors i fetchen.
  return fetch("https://kjetilpizzaapi.azurewebsites.net/api/pizza")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
};
