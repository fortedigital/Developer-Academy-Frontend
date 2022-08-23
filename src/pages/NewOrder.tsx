import React, { useEffect, useState } from "react";

import Heading from "../components/Heading";
import PizzaCard from "../components/PizzaCard";
import ShoppingCart from "../components/ShoppingCart";

import { IPizza } from "../interfaces/pizza";
import { IPostOrder } from "../interfaces/order";
import { fetchAllPizzas } from "../api/fetchAllPizzas";
import { dummyPizzas } from "../data/dummyPizzas";
import { postOrder } from "../api/postOrder";

export default function NewOrder() {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [shoppingCartItems, setShoppingCartItems] = useState<IPizza[]>([]);

  useEffect(() => {
    // TODO: Modifiser fetchAllPizzas() til å returnere pizzaer fra API istedenfor fra dummy-data
    fetchAllPizzas().then((response) => setPizzas(response));
  }, []);

  const handleAddToOrder = (pizza: IPizza) => {
    // TODO: legg til valgt pizza i shoppingCartItems
  };

  const handleRemoveFromOrder = (itemIndex: number) => {
    // TODO: fjern valgt pizza fra shoppingCartItems
  };

  const handleCompleteOrder = () => {
    /* TODO: Generer body-objekt av typen IPostOrder og send dette til postOrder()
     - Sett userId til 1
     - Sett pizzaIds til å være et array av alle IDene fra shoppingCartItems */
     
    // Tøm handlekurv etter gjennomført bestilling

    // Ekstraoppgave: vis alert som sier at bestilling er gjennomført
  };

  return (
    <div className="flex w-full" id="new-order">
      <div className="grow overflow-y-auto p-6">
        <Heading>Bestill</Heading>
        <div className="grid grid-cols-2 gap-4">
          {/*
            TODO: list ut alle pizzaene i pizzas-state ved bruk av PizzaCard-komponent
            Tips: bruk Array.map()
          */}
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
