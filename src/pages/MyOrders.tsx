import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import OrderItem from "../components/OrderItem";
import { IOrder } from "../interfaces/order";
import { dummyOrders } from "../data/dummyOrders";

export default function MyOrders() {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    setOrders(dummyOrders as IOrder[]);
  }, []);

  return (
    <div className="w-full p-6">
      <Heading>Mine bestillinger</Heading>
      <div className="flex gap-x-4">
        <div className="grid grid-cols-1 divide-y divide-gray-500">
          {orders.map((order, index) => (
            <OrderItem order={order} key={index} />
          ))}
        </div>
        {/* <div className="border border-gray-300 bg-white grow">Detaljer</div> */}
      </div>
    </div>
  );
}
