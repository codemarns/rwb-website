"use client";

import { Product } from "@/app/components/Product";
import { Features } from "@/app/components/Features";
import { CommonFeatureProps, TProductsProps } from "@/app/types/types";

export const Client = ({
  hero,
  features,
}: {
  hero: TProductsProps;
  features: CommonFeatureProps[] | undefined;
}) => {
  return (
    <>
      <Product data={hero} />
      <Features data={features} />
    </>
  );
};
