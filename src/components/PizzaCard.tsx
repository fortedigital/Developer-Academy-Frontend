import React from "react";
import { IPizza } from "../interfaces/pizza";

export const PizzaCard = (pizza: IPizza) => {
  return (
    <div className="pizza-card">
      <p>{pizza.name}</p>
    </div>
  );
};
