import { Client } from "./Client";
import { products_data } from "@/app/data";

export default function Esports() {
  return (
    <Client hero={products_data[3]} features={products_data[3]?.features} />
  );
}
