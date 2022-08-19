import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import OrderItem from "../components/OrderItem";
import { IOrder } from "../interfaces/order";
import { dummyOrders } from "../data/dummyOrders";

export default function MyOrders() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | undefined>();

  useEffect(() => {
    setOrders(dummyOrders as IOrder[]);
  }, []);

  return (
    <div className="flex w-full flex-col p-6">
      <Heading>Mine bestillinger</Heading>
      <div className="flex overflow-y-auto">
        <div className="flex flex-col divide-y divide-stone-400 overflow-y-auto pr-6">
          {orders.map((order, index) => (
            <OrderItem
              order={order}
              onCheckDetails={() => setSelectedOrder(order)}
              key={index}
            />
          ))}
        </div>
        {selectedOrder && (
          <div className="ml-6 flex max-w-[480px] grow flex-col rounded-md border border-gray-300 bg-white p-4">
            <h2 className="mb-4 text-xl font-bold">Ordredetaljer</h2>
            <p className="mb-4 text-gray-500">Ordrenummer: {selectedOrder.id}</p>
            <div className="grid grid-cols-1 divide-y divide-stone-300 overflow-y-auto">
              {selectedOrder.items.map((item, index) => (
                <div
                  className="flex items-center justify-between py-4"
                  key={index}
                >
                  <p>{item.name}</p>
                  <p className="font-bold">{item.price} kr</p>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-stone-500 py-4">
              Totalpris:{" "}
              <span className="font-bold">{selectedOrder.price} kr</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
