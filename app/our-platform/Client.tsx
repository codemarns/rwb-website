"use client";

import { Hero } from "./sections/Hero";
import { FeatureHighlights } from "./sections/FeatureHighlights";
import { DynamicFeatures } from "./sections/DynamicFeatures";

export const Client = () => {
  return (
    <>
      <Hero />
      <FeatureHighlights />
      <DynamicFeatures />
    </>
  );
};
