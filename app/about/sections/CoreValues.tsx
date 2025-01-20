"use client";

import { Section } from "@/app/components/Section";
import { Heading } from "@/app/components/Heading";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";
import { core_values_data } from "@/app/data";

export const CoreValues = () => {
  return (
    <Section
      id="about-corevalues-section"
      className="relative flex items-center justify-center bg-[url('/core-values-bg.jpg')] bg-center bg-cover bg-no-repeat bg-fixed before:content-[''] before:bg-[#0A0C18]/80 before:backdrop-blur before:absolute before:inset-0"
    >
      <Container className="relative space-y-12 sm:space-y-14 lg:space-y-16">
        <div className="space-y-6 sm:space-y-9 lg:space-y-12">
          <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto text-center">
            <Heading as="h2">Core Values</Heading>
          </div>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row justify-center gap-4 sm:gap-6 lg:gap-8">
          {core_values_data.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-screen-md lg:max-w-96 mx-auto space-y-3 xs:space-y-4 sm:space-y-6 p-6 xs:p-8 sm:p-10 flex-1 text-center bg-gradient-to-tr from-primary-900/50 to-primary-800/50 backdrop-blur-xl rounded-3xl border border-primary-900 overflow-hidden"
            >
              <Heading as="h5" theme="light" className="text-accent-500">
                {item.title}
              </Heading>
              <Typography as="default" theme="dark">
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
