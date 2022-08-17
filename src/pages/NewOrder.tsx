import React, { useEffect, useState } from "react";

import Heading from "../components/Heading";
import PizzaCard from "../components/PizzaCard";
import ShoppingCart from "../components/ShoppingCart";

import { IPizza } from "../interfaces/pizza";
import { ShoppingCartContext } from "../App";
import { fetchAllPizzas } from "../api/fetchAllPizzas";

export default function NewOrder() {
  const [pizzas, setPizzas] = useState<IPizza[]>([
    { name: "Margarita (DUMMY)", price: 140 },
    { name: "Prosciutto (DUMMY)", price: 180 },
    { name: "Funghi (DUMMY)", price: 160 },
    { name: "Hawaii (DUMMY)", price: 175 },
  ]);

  useEffect(() => {
    /* TODO: hent pizzaer fra API og legg dem til i pizzas-state */
  }, []);

  const handleAddToOrder = (pizza: IPizza) => {
    /* TODO: legg til valgt pizza i handlekurv med ShoppingCartContext */
  };

  return (
    <div className="flex h-full" id="order">
      <div className="grow p-6">
        <Heading>Bestill</Heading>
        <div className="grid grid-cols-4 gap-4">
          {/*TODO: list ut alle pizzaene som PizzaCard*/}
          {pizzas.map((pizza, index) => (
            <PizzaCard
              pizza={pizza}
              onAddToOrder={() => handleAddToOrder(pizza)}
            />
          ))}
        </div>
      </div>
      <ShoppingCart />
    </div>
  );
}