"use client";

import Image from "next/image";
import { Section } from "@/app/components/Section";
import { Heading } from "@/app/components/Heading";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";
import { feature_highlight_data } from "@/app/data";

export const FeatureHighlights = () => {
  return (
    <Section
      id="partners-feature-highlight-section"
      className="space-y-16 md:space-y-20 xl:space-y-24 2xl:space-y-32 xl:!pt-0"
    >
      <Container className="relative grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-16 lg:gap-24 xl:gap-32">
        <div className="px-8 flex items-center justify-center">
          <Image
            width={575}
            height={366}
            alt="Our Platform Background"
            src={"/feature-highlights.png"}
            className="object-contain"
          />
        </div>

        <div className="space-y-8 sm:space-y-16">
          <div className="space-y-4 sm:space-y-8">
            <Heading as="h2">Feature Highlights</Heading>

            <Typography as="default" size="LG">
              Operators benefit from features like a Dynamic Layout Builder, CRM
              Management, and advanced Affiliate Tools. With Automatic KYC and
              AML Solutions, compliance is seamless, while Iframe and
              White-Label Solutions enable quick and efficient integration.
            </Typography>

            <div className="pt-2 md:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {feature_highlight_data.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-16 w-16 hidden md:flex items-center justify-center">
                    <Image
                      width={64}
                      height={64}
                      alt={item?.title}
                      src={item?.icon || ""}
                      className="object-contain"
                    />
                  </div>
                  <div className="h-12 w-12 flex md:hidden items-center justify-center">
                    <Image
                      width={48}
                      height={48}
                      alt={item?.title}
                      src={item?.icon || ""}
                      className="object-contain"
                    />
                  </div>
                  <Typography as="default" size="LG" bold>
                    {item?.title}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Button here */}
        </div>
      </Container>

      {feature_highlight_data.map((item, index) => (
        <Container
          key={index}
          className="relative grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-16 lg:gap-24 xl:gap-32"
        >
          <div
            id="asset"
            className="xl:row-start-1 px-8 flex items-center justify-center"
          >
            <Image
              width={413}
              height={387}
              alt={item?.title}
              src={item?.image || ""}
              className="object-contain"
            />
          </div>
          <div
            id="details"
            className="xl:row-start-1 flex items-center justify-center"
          >
            <div className="space-y-4 sm:space-y-8">
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
