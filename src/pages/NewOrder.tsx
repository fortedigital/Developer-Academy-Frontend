import React, { useEffect, useState } from 'react';

import Heading from '../components/Heading';
import PizzaCard from '../components/PizzaCard';
import ShoppingCart from '../components/ShoppingCart';

import { IPizza } from '../interfaces/pizza';
import { IPostOrder } from '../interfaces/order';
import { fetchAllPizzas } from '../api/fetchAllPizzas';
import { dummyPizzas } from '../data/dummyPizzas';
import { postOrder } from '../api/postOrder';
import { getCurrentAccount } from '../auth/authPopup';

export default function NewOrder() {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [shoppingCartItems, setShoppingCartItems] = useState<IPizza[]>([]);

  console.log(getCurrentAccount());
  useEffect(() => {
    // TODO: Modifiser fetchAllPizzas() til å returnere pizzaer fra API istedenfor fra dummy-data
    fetchAllPizzas().then((response) => setPizzas(response));
  }, []);

  const handleAddToOrder = (pizza: IPizza) => {
    // TODO: legg til valgt pizza i shoppingCartItems
    setShoppingCartItems((currentCartItems) => [...currentCartItems, pizza]);
  };

  const handleRemoveFromOrder = (itemIndex: number) => {
    // TODO: fjern valgt pizza fra shoppingCartItems
    // Tips: funksjonen tar imot en index, så
    const updatedCartItems = shoppingCartItems.filter(
      (_, index) => index !== itemIndex
    );

    setShoppingCartItems(updatedCartItems);
  };

  const handleCompleteOrder = () => {
    if (!getCurrentAccount()) {
      alert('Logg inn for å fullføre bestilling!');
      return;
    }
    if (!getCurrentAccount()?.idTokenClaims?.oid) {
      alert('Kunne ikke finne din bruker-id! Prøv igjen senere');
      return;
    }
    const items = shoppingCartItems.map((item) => {
      return item.id;
    });
    const body: IPostOrder = {
      userId: parseInt(getCurrentAccount()?.idTokenClaims?.oid || '0'),
      pizzaIds: items,
    };
    postOrder(body);
    alert(
      'Completing order! \n\n' +
        shoppingCartItems.map((item) => item.name + '\n').join('')
    );

    setShoppingCartItems([]);
  };

  return (
    <div className="flex w-full" id="new-order">
      <div className="grow overflow-y-auto p-6">
        <Heading>Bestill</Heading>
        <div className="grid grid-cols-2 gap-4">
          {/*TODO: list ut alle pizzaene i pizzas-state som PizzaCard*/}
          {pizzas.map((pizza, index) => (
            <PizzaCard
              pizza={pizza}
              onAddToOrder={handleAddToOrder}
              key={index}
            />
          ))}
        </div>
      </div>
      <ShoppingCart
        items={shoppingCartItems}
        onRemoveFromOrder={handleRemoveFromOrder}
        onCompleteOrder={handleCompleteOrder}
      />
    </div>
  );
}
