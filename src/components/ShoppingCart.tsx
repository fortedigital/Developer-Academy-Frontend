import React from "react";
import { IPizza } from "../interfaces/pizza";
import Button from "./Button";

type ShoppingCartProps = {
  items: IPizza[];
  onCompleteOrder: () => void;
  onRemoveFromOrder: (itemIndex: number) => void;
};

type ShoppingCartItemProps = {
  pizza: IPizza;
  onRemove: () => void;
};

const ShoppingCartItem = ({ pizza, onRemove }: ShoppingCartItemProps) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <p>{pizza.name}</p>
        <p className="font-bold">{pizza.price} kr</p>
      </div>
      <Button onClick={onRemove} size="small" variant="ghost">
        Fjern
      </Button>
    </div>
  );
};

export default function ShoppingCart({
  items,
  onCompleteOrder,
  onRemoveFromOrder,
}: ShoppingCartProps) {
  const getTotalPrice = () => {
    const totalPrice = items.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    return totalPrice;
  };

  return (
    <div
      className="flex w-72 flex-none flex-col border-l border-stone-500 lg:w-96"
      id="shopping-cart"
    >
      <div className="grow overflow-auto p-6">
        <h2 className="mb-4 text-2xl font-bold">Handlekurv</h2>
        <div className="grid grid-cols-1 divide-y divide-stone-300">
          {items.map((item, index) => (
            <ShoppingCartItem
              pizza={item}
              onRemove={() => onRemoveFromOrder(index)}
              key={index}
            />
          ))}
        </div>
      </div>
      {/*TODO: Display pizzas in shopping cart context*/}
      <div className="flex items-center justify-between border-t border-stone-300 bg-stone-100 p-6">
        <p>
          Totalpris: <span className="font-bold">{getTotalPrice()} kr</span>
        </p>
        <Button onClick={() => onCompleteOrder()}>Bestill</Button>
      </div>
    </div>
  );
}
