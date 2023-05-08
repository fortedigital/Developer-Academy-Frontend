import React from "react";
import { IOrder } from "../interfaces/order";

type OrderDetailsProps = {
  order: IOrder;
};

type DetailsItemProps = {
  name: string;
};

const DetailsItem = ({ name }: DetailsItemProps) => {
  return (
    <div className="flex items-center justify-between py-4">
      <p>{name}</p>
    </div>
  );
};

export default function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <div
      className="flex max-w-[480px] grow flex-col rounded-md border border-gray-300 bg-white p-4"
      id="order-details"
    >
      <h2 className="mb-4 text-xl font-bold">Ordredetaljer</h2>
      <p className="mb-4 text-gray-500">Ordrenummer: {order.orderId}</p>
      <div className="grid grid-cols-1 divide-y divide-stone-300 overflow-y-auto">
        {order.pizza.map((pizzaItem, index) => (
          <DetailsItem name={pizzaItem} key={index} />
        ))}
      </div>
      <p className="mt-8 border-t border-stone-500 py-4">
        Totalpris: <span className="font-bold">{order.price} kr</span>
      </p>
    </div>
  );
}
