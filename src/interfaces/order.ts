import { IPizza } from "./pizza";

export interface IOrder {
  id: string;
  orderedBy: string;
  items: IPizza[];
  price: number;
  date: Date;
  status: "ORDERED" | "IN_PROGRESS" | "DELIVERED";
}
