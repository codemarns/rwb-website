"use client";

import { Section } from "@/app/components/Section";
import { Heading } from "@/app/components/Heading";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";

export const Hero = () => {
  return (
    <Section
      id="partners-hero-section"
      className="relative py-40 md:py-44 xl:py-48 flex items-center justify-center bg-black"
    >
      <Container className="relative max-w-3xl">
        <div className="space-y-8">
          <Heading as="h1" className="text-center">
            About Us
          </Heading>
          <Typography as="default" size="XXL" bold className="text-center">
            At RWB Solutions International, we strive to be your premier partner
            in the iGaming industry. Combining innovative technology, tailored
            flexibility, and a wealth of expertise, we empower operators with
            dynamic tools to thrive in a competitive market.
          </Typography>
        </div>
      </Container>
    </Section>
  );
};
