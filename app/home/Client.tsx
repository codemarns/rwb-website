"use client";

import { Hero } from "./section/hero/Hero";
import { Features } from "./section/features/Features";
import { Products } from "./section/products/Products";
import { Partners } from "./section/partners/Partners";

export const Client = () => {
  return (
    <>
      <Hero />
      <div className="h-auto w-full -space-y-40 md:-space-y-52 xl:-space-y-64">
        <Features />
        <Products />
        <Partners />
      </div>
    </>
  );
};
