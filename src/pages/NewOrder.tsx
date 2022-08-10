import React, { useState } from "react";

import Heading from "../components/Heading";
import PizzaCard from "../components/PizzaCard";
import ShoppingCart from "../components/ShoppingCart";

import { ShoppingCartContext } from "../App";
import { IPizza } from "../interfaces/pizza";

export default function NewOrder() {
  const [pizzas, setPizzas] = useState<IPizza[]>([
    { name: "Margarita", price: 140 },
    { name: "Prosciutto", price: 180 },
    { name: "Funghi", price: 160 },
    { name: "Hawaii", price: 175 },
    { name: "Margarita", price: 140 },
    { name: "Prosciutto", price: 180 },
    { name: "Funghi", price: 160 },
    { name: "Hawaii", price: 175 },
  ]);

  return (
    <div className="flex h-full" id="order">
      <div className="grow p-6">
        <Heading>Bestill</Heading>
        {/*TODO: List all pizzas as PizzaCard*/}
        <div className="grid grid-cols-4 gap-4">
          {pizzas.map((pizza, index) => (
            <PizzaCard pizza={pizza} key={index} />
          ))}
        </div>
      </div>
      <ShoppingCart />
    </div>
  );
}
