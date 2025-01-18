"use client";

import { cn } from "@/app/lib/cn";
import { Card } from "../components/Card";
import { Heading } from "@/app/components/Heading";
import { Section } from "@/app/components/Section";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";
import { dynamic_feature_data } from "@/app/data";

export const DynamicFeatures = () => {
  return (
    <Section id="partners-feature-highlight-section" className="">
      <Container className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <div className="col-start-1 xl:col-start-2 ol-end-2 md:col-end-3 xl:row-start-1 xl:row-end-2 max-w-screen-md mx-auto space-y-4 sm:space-y-8 text-center">
          <Heading as="h2">Dynamic Features</Heading>
          <Typography
            as="default"
            size="LG"
            className="pb-6 sm:pb-9 lg:pb-12 xl:pb-0"
          >
            Whether it’s opting for a Turnkey Solution or a Fully Managed
            Solution, we deliver flexibility, innovation, and reliability,
            ensuring your platform achieves an excellent reputation in the
            market and ultimately boosting sustainable growth.
          </Typography>
        </div>

        {dynamic_feature_data.map((item, index) => {
          const cardPositionCls = cn("", index, {
            ["xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-3"]:
              item.id === "security",
            ["xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-3"]:
              item.id === "scalability",
            ["xl:col-start-2 xl:col-end-3 xl:row-start-2 xl:row-end-4"]:
              item.id === "multi-language",
            ["xl:col-start-1 xl:col-end-2 xl:row-start-3 xl:row-end-5"]:
              item.id === "analytics",
            ["xl:col-start-3 xl:col-end-4 xl:row-start-3 xl:row-end-5"]:
              item.id === "mobile-optimization",
          });
          return <Card key={index} {...item} className={cardPositionCls} />;
        })}
      </Container>
    </Section>
  );
};
