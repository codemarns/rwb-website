"use client";

import { Hero } from "./sections/Hero";
import { Partners } from "./sections/Partners";

export const Client = () => {
  return (
    <div className="h-auto w-full -space-y-24 bg-gradient-to-b from-primary-100 to-white">
      <Hero />
      <Partners />
    </div>
  );
};
