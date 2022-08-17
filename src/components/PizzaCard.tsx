import React from "react";
import { IPizza } from "../interfaces/pizza";
import Button from "./Button";

type Props = {
  pizza: IPizza;
  onAddToOrder?: () => void;
};

const PizzaCard = ({ pizza, onAddToOrder }: Props) => {
  return (
    <div className="h-52 border border-gray-300 bg-white p-4">
      <p>{pizza.name}</p>
      <Button onClick={onAddToOrder} variant="outlined">Legg til</Button>
      {/*
      TODO: 
      - Vis pizza-pris
      - Legg til Add to order-knapp
      */}
    </div>
  );
};

export default PizzaCard;