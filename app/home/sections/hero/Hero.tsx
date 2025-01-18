"use client";

import { Button } from "@/app/components/Button";
import { Heading } from "@/app/components/Heading";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";
import { VideoOverlay } from "./components/VideoOverlay";

export const Hero = () => {
  return (
    <section
      id="home-hero-section"
      className="relative h-screen w-full bg-black flex items-center justify-center"
    >
      <VideoOverlay />

      <Container className="relative z-[3] space-y-16 p-4 sm:p-6 lg:p-8">
        <div className="space-y-8">
          <Heading as="h1" className="text-center">
            RWB Solutions International - Your Gateway to the Future of iGaming.
          </Heading>
          <Typography as="default" size="XXL" bold className="text-center">
            Launch faster, grow bigger, and scale smarter with our innovative
            platform.
          </Typography>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <Button size="XL" variant="solid" className="w-52 sm:w-60">
            Get Started
          </Button>
          <Button size="XL" variant="outline" className="w-52 sm:w-60">
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
};
