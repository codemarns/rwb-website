"use client";

import Image from "next/image";
import { Section } from "@/app/components/Section";
import { Heading } from "@/app/components/Heading";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";
import { CommonFeatureProps } from "@/app/types/types";

type TFeaturesProps = {
  data: CommonFeatureProps[] | undefined;
};

export const Features: React.FC<TFeaturesProps> = ({ data }) => {
  return (
    <Section
      id="feature-highlights-section"
      className="space-y-24 md:space-y-32"
    >
      {data?.map((item, index) => (
        <Container
          key={index}
          className="relative grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 xl:gap-24"
        >
          <div
            id="asset"
            className="xl:row-start-1 px-8 flex items-center justify-center"
          >
            <Image
              width={529}
              height={437}
              alt={item?.title}
              src={item?.image || ""}
              className="object-contain"
            />
          </div>

          <div
            id="details"
            className="xl:row-start-1 flex items-center justify-center"
          >
            <div className="space-y-4 sm:space-y-8 max-w-3xl mx-auto text-center xl:text-left">
              <Heading as="h2">{item.title}</Heading>
              <Typography
                bold
                size="LG"
                as="default"
                className="leading-relaxed"
              >
                {item.description}
              </Typography>
            </div>
          </div>
        </Container>
      ))}
    </Section>
  );
};
