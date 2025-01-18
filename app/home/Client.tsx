"use client";

import { Features } from "./sections/features/Features";
import { Products } from "./sections/products/Products";
import { Partners } from "./sections/partners/Partners";
import { Hero } from "./sections/hero/Hero";

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
