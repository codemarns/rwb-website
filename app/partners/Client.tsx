"use client";

import { Hero } from "./section/Hero";
import { Partners } from "./section/Partners";

export const Client = () => {
  return (
    <div className="h-auto w-full -space-y-24 bg-gradient-to-b from-primary-100 to-white">
      <Hero />
      <Partners />
    </div>
  );
};
