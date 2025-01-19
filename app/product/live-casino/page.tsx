import { Client } from "./Client";
import { products_data } from "@/app/data";

export default function LiveCasino() {
  return (
    <Client hero={products_data[0]} features={products_data[0]?.features} />
  );
}
