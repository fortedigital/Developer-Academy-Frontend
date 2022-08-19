import React, { useEffect, useState } from "react";

import Heading from "../components/Heading";
import PizzaCard from "../components/PizzaCard";
import ShoppingCart from "../components/ShoppingCart";

import { IPizza } from "../interfaces/pizza";
import { fetchAllPizzas } from "../api/fetchAllPizzas";
import { dummyPizzas } from "../data/dummyPizzas";

export default function NewOrder() {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [shoppingCartItems, setShoppingCartItems] = useState<IPizza[]>([]);

  useEffect(() => {
    setPizzas(dummyPizzas);
    /* TODO: hent pizzaer fra API og legg dem til i pizzas-state */
  }, []);

  const handleAddToOrder = (pizza: IPizza) => {
    setShoppingCartItems((shoppingCartItems) => [...shoppingCartItems, pizza]);
    /* TODO: legg til valgt pizza i handlekurv-state */
  };

  const handleRemoveFromOrder = (pizzaIndex: number) => {
    const updatedItems = shoppingCartItems.filter(
      (_, index) => index !== pizzaIndex
    );

    setShoppingCartItems(updatedItems);
  };

  const handleCompleteOrder = () => {
    alert(
      "Completing order! \n\n" +
        shoppingCartItems.map((item) => item.name + "\n").join("")
    );

    setShoppingCartItems([]);
  };

  return (
    <div className="flex w-full" id="new-order">
      <div className="grow overflow-y-auto p-6">
        <Heading>Bestill</Heading>
        <div className="grid grid-cols-2 gap-4">
          {/*TODO: list ut alle pizzaene som PizzaCard*/}
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
