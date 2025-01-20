"use client";

import { Hero } from "./sections/Hero";
import { Details } from "./sections/Details";
import { CoreValues } from "./sections/CoreValues";
// import { Features } from "./sections/features/Features";

export const Client = () => {
  return (
    <>
      <div className="h-auto w-full -space-y-24 bg-gradient-to-b from-primary-100 to-white">
        <Hero />
        <Details />
      </div>
      <CoreValues />
      {/* <Features /> */}
    </>
  );
};
