import React from "react";
import { IOrder } from "../interfaces/order";

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
  <div className="">
    <p className="text-sm text-gray-500">{label}</p>
    <p>{value}</p>
  </div>
);

// Ekstraoppgave: bytt farge basert på status
/* ${
    order.status === "ORDERED"
      ? "text-sky-600"
      : order.status === "IN_PROGRESS"
      ? "text-orange-600"
      : "text-green-700"
  } 
*/

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <button className="grid max-w-3xl grid-cols-2 items-center gap-4 rounded-md border border-gray-200 bg-white py-4 px-6 text-left hover:shadow-md sm:grid-cols-4">
      <Field label="Dato" value={order.date.toLocaleDateString("no-NB")} />
      <Field label="Pris" value={`${order.price} kr`} />
      <Field label="Antall pizzaer" value={`${order.items.length} stk.`} />
      <div className="sm:w-24 sm:place-self-end">
        <p className="text-sm text-gray-500">Status</p>
        <p className={`font-bold`}>{statusLabels[order.status]}</p>
      </div>
    </button>
  );
}
