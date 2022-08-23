import { IPostOrder } from '../interfaces/order';

export const postOrder = (body: IPostOrder): void => {
  // TODO: Implementer et fetch() call som poster bestillingen til APIet
  fetch('https://kjetilpizzaapi.azurewebsites.net/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};
