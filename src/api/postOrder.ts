import { IPostOrder } from '../interfaces/order'

export const postOrder = (body: IPostOrder): void => {
  fetch('https://kjetilpizzaapi.azurewebsites.net/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
} 