import { Client } from "./Client";
import { products_data } from "@/app/data";

export default function Sportsbook() {
  return (
    <Client hero={products_data[2]} features={products_data[2]?.features} />
  );
}
