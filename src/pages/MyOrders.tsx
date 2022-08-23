import React, { useEffect, useState } from 'react';

import Heading from '../components/Heading';
import OrderItem from '../components/OrderItem';
import OrderDetails from '../components/OrderDetails';

import { IOrder } from '../interfaces/order';
import { dummyOrders } from '../data/dummyOrders';
import { fetchUserOrders } from '../api/fetchUserOrders';

export default function MyOrders() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | undefined>();

  useEffect(() => {
    setOrders(dummyOrders as IOrder[]);
    fetchUserOrders(1).then((response) => setOrders(response));
    /* TODO: hent bestillinger fra API og legg dem til i orders-state */
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
          {/*TODO: list ut alle bestillingene i orders-state som OrderItem*/}
        </div>
        {selectedOrder && <OrderDetails order={selectedOrder} />}
      </div>
    </div>
  );
}
