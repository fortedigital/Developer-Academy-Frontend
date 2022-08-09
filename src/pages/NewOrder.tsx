import React, { useState } from "react";
import { IPizza } from "../interfaces/pizza";
import { PizzaCard } from "../components/PizzaCard";
import { ShoppingCartContext } from "../App";

export default function NewOrder() {
  const [pizzas, setPizzas] = useState<IPizza[]>([
    { name: "Margarita" },
    { name: "Prosciutto" },
    { name: "Funghi" },
    { name: "Hawaii" },
  ]);
  return (
    <div id="order">
      <button>Sorter etter</button>
      <button>Filtrer</button>
      {/*TODO: List all pizzas as PizzaCard*/}

      <div id="sidemenu">
        <p>Handlekurv</p>
        {/*TODO: Display pizzas in shopping cart context*/}
        <button>Bestill</button>
      </div>
    </div>
  );
}
