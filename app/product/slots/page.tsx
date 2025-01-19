import { Client } from "./Client";
import { products_data } from "@/app/data";

export default function Slots() {
  return (
    <Client hero={products_data[1]} features={products_data[1]?.features} />
  );
}
