"use client";

import { Card } from "./components/Card";
import { Overlay } from "./components/Overlay";
import { Section } from "@/app/components/Section";
import { Heading } from "@/app/components/Heading";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";
import { home_product_data } from "@/app/data";

export const Products = () => {
  return (
    <Section
      id="home-products-section"
      className="relative py-40 md:py-52 xl:py-64 flex items-center justify-center bg-accent-500"
    >
      <Overlay />

      <Container className="relative space-y-12 sm:space-y-14 lg:space-y-16">
        <div className="space-y-6 sm:space-y-9 lg:space-y-12">
          <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto text-center">
            <Heading as="h2" theme="light">
              Products
            </Heading>
            <Typography as="default" size="LG" theme="light">
              Delivering rapid deployment solutions, leveraging regional
              expertise with global connectivity, and providing customized
              content to engage diverse audiences.
            </Typography>
          </div>
          {/* Button here */}
        </div>

        <div className="flex-1 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          {home_product_data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
