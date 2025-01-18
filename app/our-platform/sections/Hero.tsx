"use client";

import Image from "next/image";
import { Button } from "@/app/components/Button";
import { Section } from "@/app/components/Section";
import { Heading } from "@/app/components/Heading";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";
import { home_product_data } from "@/app/data";

export const Hero = () => {
  return (
    <Section
      id="partners-hero-section"
      className="relative pt-40 md:pt-44 xl:pt-48 2xl:pb-32 bg-[url('/platform-bg.png')] bg-center bg-cover bg-no-repeat"
    >
      <div className="hidden xl:block absolute top-0 left-0 right-0 -space-y-[1px]">
        <Image
          width={1920}
          height={1163}
          alt="Our Platform Background"
          src={"/platform-bg.png"}
          className="w-full object-contain"
        />
        <Image
          width={1920}
          height={1196}
          alt="Our Platform Background"
          src={"/platform-bg-2.png"}
          className="w-full object-contain"
        />
      </div>

      <div className="block xl:hidden absolute inset-0 bg-opaque-black" />

      <Container className="relative grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-16 lg:gap-24">
        <div className="space-y-8 sm:space-y-16">
          <div className="space-y-4 sm:space-y-8 text-center sm:text-left">
            <Heading as="h1">Our Platform</Heading>

            <Typography as="default" size="XXL" bold>
              RWB Solutions International redefines iGaming with a
              comprehensive, scalable platform designed to cater to diverse
              operator needs. Our solutions cover live casino, slots,
              sportsbook, and esports, providing immersive experiences that
              engage players and drive retention.
            </Typography>

            <div className="pt-2 md:pt-4 hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4">
              {home_product_data.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-16 w-16 hidden md:flex items-center justify-center">
                    <Image
                      width={64}
                      height={64}
                      alt={item.title}
                      src={item.icon}
                      className="object-contain"
                    />
                  </div>
                  <div className="h-12 w-12 flex md:hidden items-center justify-center">
                    <Image
                      width={48}
                      height={48}
                      alt={item.title}
                      src={item.icon}
                      className="object-contain"
                    />
                  </div>
                  <Typography as="default" size="XXL" bold>
                    {item.title}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          <Button
            size="XL"
            variant="solid"
            className="w-52 sm:w-60 mx-auto sm:ml-0"
          >
            Learn More
          </Button>
        </div>

        {/* 2nd Column */}
      </Container>
    </Section>
  );
};
