import React from "react";
import { IPizza } from "../interfaces/pizza";

type Props = {
  pizza: IPizza;
};

const PizzaCard = ({ pizza }: Props) => {
  return (
    <div className="p-4 h-52 items-center justify-center border border-gray-200">
      <p>{pizza.name}</p>
      <p>{pizza.price} kr</p>
    </div>
  );
};

export default PizzaCard;
