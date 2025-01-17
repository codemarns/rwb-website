"use client";

import { Section } from "@/app/components/Section";
import { Container } from "@/app/components/Container";

export const Products = () => {
  return (
    <Section
      id="products"
      className="relative !py-40 flex items-center justify-center bg-accent-500"
      style={{
        clipPath: "polygon(0 0, 100% 17%, 100% 100%, 0 83%)",
      }}
    >
      <div
        className="absolute inset-0 h-full w-full bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/product-parallax-bg.jpg)",
          clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)",
        }}
      >
        <div className="h-full w-full bg-primary-100/95" />
      </div>
      <Container className="h-[500px]">Products</Container>
    </Section>
  );
};
