import React from "react";
import { IPizza } from "../interfaces/pizza";
import Button from "./Button";

type Props = {
  pizza: IPizza;
  onAddToOrder?: (pizza: IPizza) => void;
};

const PizzaCard = ({ pizza, onAddToOrder = () => {} }: Props) => {
  return (
    <div className="flex h-52 divide-x divide-gray-300 overflow-hidden rounded-md border border-gray-300 bg-white">
      <div className="flex flex-none basis-1/2 flex-col justify-between p-4">
        <div className="bg-white">
          <p className="mb-2">{pizza.name}</p>
          <p className="text-lg font-bold">{pizza.price} kr</p>
          {/* TODO: vis pizza-pris, bruk klassene "text-lg font-bold" */}
        </div>
        <Button
          onClick={() => onAddToOrder(pizza)}
          variant="outlined"
          size="small"
        >
          Legg til
        </Button>
        {/* TODO: implementer "Legg til"-knapp med Button-komponent */}
      </div>
      <img
        src={`/assets/images/${pizza.picture}`}
        className="basis-1/2 object-cover"
        alt={pizza.name}
      />
      {/* TODO: vis pizza-bilde, bruk klassene "basis-1/2 object-cover" */}
    </div>
  );
};

export default PizzaCard;
