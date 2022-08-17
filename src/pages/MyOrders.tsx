import React, { useState } from "react";
import Heading from "../components/Heading";
import OrderCard from "../components/OrderCard";
import { IOrder } from "../interfaces/order";

export default function MyOrders() {
  const [orders, setOrders] = useState<IOrder[]>([
    {
      id: "43423",
      orderedBy: "1278",
      items: ["4bng43"],
      price: 175,
      date: new Date(),
      status: "ORDERED",
    },
    {
      id: "43423",
      orderedBy: "1278",
      items: ["4bng43"],
      price: 175,
      date: new Date(),
      status: "IN_PROGRESS",
    },
    {
      id: "43423",
      orderedBy: "1278",
      items: ["4bng43"],
      price: 175,
      date: new Date(),
      status: "DELIVERED",
    },
  ]);

  return (
    <div className="w-full p-6">
      <Heading>Mine bestillinger</Heading>
      <div className="grid gap-4">
        {orders.map((order, index) => (
          <OrderCard order={order} key={index} />
        ))}
      </div>
    </div>
  );
}
