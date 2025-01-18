"use client";

import { Button } from "@/app/components/Button";
import { Section } from "@/app/components/Section";
import { Heading } from "@/app/components/Heading";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";

export const Seo = () => {
  return (
    <Section
      id="seo-section"
      className="relative z-[1] flex items-center justify-center bg-primary-50"
    >
      <Container className="max-w-5xl space-y-12 sm:space-y-14 lg:space-y-16">
        <div className="space-y-6 sm:space-y-9 lg:space-y-12">
          <div className="space-y-4 sm:space-y-5 text-center">
            <Heading as="h3" theme="light">
              Your Gateway to Aggregated Solutions
            </Heading>
            <Typography as="default" size="XL" theme="light" bold>
              Experience the best of Asia’s iGaming market with our leading
              platform. We offer top-tier aggregated solutions, combining the
              finest games, providers, and technologies. Join us today and
              unlock the full potential of Asia’s iGaming gateway.
            </Typography>
          </div>
          <Button size="XL" variant="solid" className="w-60 mx-auto">
            Join Now
          </Button>
        </div>
      </Container>
    </Section>
  );
};
