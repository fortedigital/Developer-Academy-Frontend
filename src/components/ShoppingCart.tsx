import React from "react";
import { ShoppingCartContext } from "../App";
import Button from "./Button";

export default function ShoppingCart() {
  return (
    <div
      className="flex w-72 flex-col border-l border-stone-300 xl:w-96"
      id="shoppingcart"
    >
      <div className="grow bg-stone-200 p-6">
        <h2 className="text-2xl font-bold">Handlekurv</h2>
      </div>
      {/*TODO: Display pizzas in shopping cart context*/}
      <div className="flex items-center justify-between border-t border-stone-300 bg-stone-100 p-6">
        <p>Totalpris: {0} kr</p>
        <Button onClick={() => alert("hey")}>Bestill</Button>
      </div>
    </div>
  );
}
