import React from "react";
import { IPizza } from "../interfaces/pizza";

type Props = {
  pizza: IPizza;
};

const PizzaCard = ({ pizza }: Props) => {
  return (
    <div className="h-52 items-center justify-center border border-gray-300 bg-white p-4">
      <p>{pizza.name}</p>
      <p>{pizza.price} kr</p>
    </div>
  );
};

export default PizzaCard;
