import React, { useEffect, useState } from "react";

import Heading from "../components/Heading";
import OrderItem from "../components/OrderItem";
import OrderDetails from "../components/OrderDetails";

import { IOrder } from "../interfaces/order";
import { fetchUserOrders } from "../api/fetchUserOrders";

export default function MyOrders() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | undefined>();

  useEffect(() => {
    const userId = 1; // hardkodet bruker-ID
    fetchUserOrders(userId).then((response) => setOrders(response));
  }, []);

  return (
    <div className="flex w-full flex-col p-6" id="my-orders">
      <Heading>Mine bestillinger</Heading>
      <div className="flex gap-x-6 overflow-y-auto">
        <div className="flex flex-col divide-y divide-stone-400 overflow-y-auto pr-6">
          {orders.map((order, index) => (
            <OrderItem
              order={order}
              onCheckDetails={() => setSelectedOrder(order)}
              key={index}
            />
          ))}
        </div>
        {selectedOrder && <OrderDetails order={selectedOrder} />}
      </div>
    </div>
  );
}
