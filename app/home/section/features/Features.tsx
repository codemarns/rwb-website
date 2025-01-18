"use client";

import Image from "next/image";
import { Card } from "./components/Card";
import { Button } from "@/app/components/Button";
import { Heading } from "@/app/components/Heading";
import { Section } from "@/app/components/Section";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";
import { home_key_feature_data } from "@/app/data";

export const Features = () => {
  return (
    <Section
      id="features-section"
      className="relative pb-40 md:pb-52 xl:pb-64 flex items-center justify-center bg-black"
    >
      <Image
        priority
        alt="key"
        src={"/bg-pattern-blur.svg"}
        width={644}
        height={644}
        className="absolute left-0 bottom-0 h-auto w-full"
      />

      <Container className="relative z-[1] grid grid-cols-1 xl:grid-cols-[512px,_1fr] gap-12 sm:gap-14 lg:gap-16">
        <Image
          priority
          alt="key"
          src={"/key.svg"}
          width={644}
          height={644}
          className="absolute left-0 bottom-0"
        />

        <div className="z-[1] flex flex-col xl:justify-start items-center xl:items-start gap-6 sm:gap-9 lg:gap-12">
          <div className="space-y-4 sm:space-y-5 max-w-3xl text-center xl:text-left">
            <Heading as="h2">Why RWB?</Heading>
            <Typography as="default" size="LG">
              Our platform’s key features serve as the building blocks of a
              seamless user experience. From lightning-fast integrations that
              eliminate tedious workflows to intuitive dashboards that visualize
              data at a glance, every feature is purpose-built to help you work
              smarter, not harder. Together, they form a powerful toolkit that
              effortlessly turns challenges into new opportunities for success.
            </Typography>
          </div>
          <Button size="XL" variant="solid" className="w-52 sm:w-60">
            Know More
          </Button>
        </div>

        <div className="z-[1] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {home_key_feature_data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
