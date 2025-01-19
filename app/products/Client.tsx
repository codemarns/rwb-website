"use client";

import { products_data } from "@/app/data";
import { Product } from "@/app/components/Product";

export const Client = () => {
  return (
    <>
      {products_data.map((item, index) => {
        return <Product key={index} data={item} page={true} showBtn={true} />;
      })}
    </>
  );
};
