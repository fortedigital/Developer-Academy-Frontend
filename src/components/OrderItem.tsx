import React from "react";
import { IOrder } from "../interfaces/order";
import Button from "./Button";

type OrderItemProps = {
  order: IOrder;
  onCheckDetails?: () => void;
};

type FieldProps = {
  label: string;
  value: string;
};

const Field = ({ label, value }: FieldProps) => (
  <div className="w-32">
    <p className="text-sm text-gray-500">{label}</p>
    <p>{value}</p>
  </div>
);

export default function OrderItem({
  order,
  onCheckDetails = () => {},
}: OrderItemProps) {
  return (
    <div className="flex items-center gap-16 py-4">
      <Field label="Ordernr." value={order.orderId.toString()} />
      <Field label="Pris" value={`${order.price} kr`} />
      <Field label="Antall pizzaer" value={`${order.pizza.length} stk.`} />
      <Button onClick={() => onCheckDetails()} variant="ghost" size="small">
        Se detaljer
      </Button>
    </div>
  );
}
