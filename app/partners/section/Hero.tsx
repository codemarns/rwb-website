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
      <Container className="relative max-w-3xl p-4 sm:p-6 lg:p-8">
        <div className="space-y-8">
          <Heading as="h1" className="text-center">
            Our Partners
          </Heading>
          <Typography as="default" size="XXL" bold className="text-center">
            Our trusted collaborators drive innovation and ensure our success,
            fostering growth and excellence in every partnership.
          </Typography>
        </div>
      </Container>
    </Section>
  );
};
