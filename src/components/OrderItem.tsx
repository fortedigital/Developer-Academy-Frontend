import React from "react";
import { IOrder } from "../interfaces/order";
import Button from "./Button";

type OrderCardProps = {
  order: IOrder;
};

type FieldProps = {
  label: string;
  value: string;
};

const statusLabels = {
  ORDERED: "Bestilt",
  IN_PROGRESS: "På vei",
  DELIVERED: "Fullført",
};

const Field = ({ label, value }: FieldProps) => (
  <div className="w-24">
    <p className="text-sm text-gray-500">{label}</p>
    <p>{value}</p>
  </div>
);

export default function OrderItem({ order }: OrderCardProps) {
  return (
    <div className="flex items-center gap-16 py-4 ">
      <Field label="Dato" value={order.date.toLocaleDateString("no-NB")} />
      <Field label="Pris" value={`${order.price} kr`} />
      <Field label="Antall pizzaer" value={`${order.items.length} stk.`} />
      <div className="w-24">
        <p className="text-sm text-gray-500">Status</p>
        <p
          className={`font-bold ${
            order.status === "ORDERED"
              ? "text-sky-700"
              : order.status === "IN_PROGRESS"
              ? "text-orange-600"
              : "text-green-700"
          }`}
        >
          {statusLabels[order.status]}
        </p>
      </div>
      <Button
        onClick={() =>
          alert(
            "Bestilling: \n\n" +
              order.items.map((item) => item + "\n").join("")
          )
        }
        variant="ghost"
        size="small"
      >
        Se detaljer
      </Button>
    </div>
  );
}
