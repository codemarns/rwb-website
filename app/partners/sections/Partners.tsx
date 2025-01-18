"use client";

import { Section } from "@/app/components/Section";
import { Container } from "@/app/components/Container";
import { partners_data } from "@/app/data";
import { Card } from "../components/Card";

export const Partners = () => {
  return (
    <Section
      id="features-section"
      className="relative !pt-0 flex items-center justify-center"
    >
      <Container className="bg-white grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {partners_data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </Container>
    </Section>
  );
};
