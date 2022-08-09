import React, { useState } from "react";

import Heading from "../components/Heading";
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
    <div className="flex h-full" id="order">
      <div className="grow p-6">
        <Heading>Bestill</Heading>
        {/*TODO: List all pizzas as PizzaCard*/}
      </div>
      <div
        className="flex w-72 flex-col border-l border-stone-400 xl:w-96"
        id="sidemenu"
      >
        <div className="grow bg-stone-300 p-6">
          <h2 className="text-2xl font-bold">Handlekurv</h2>
        </div>
        {/*TODO: Display pizzas in shopping cart context*/}
        <div className="flex items-center justify-between border-t border-stone-400 bg-stone-100 p-6">
          <p>Totalpris: {0} kr</p>
          <button className="rounded bg-red-600 px-6 py-2 font-bold text-white hover:bg-red-500 active:bg-red-700">
            Bestill
          </button>
        </div>
      </div>
    </div>
  );
}
