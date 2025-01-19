"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/Button";
import { Section } from "@/app/components/Section";
import { Heading } from "@/app/components/Heading";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";
import { products_data } from "@/app/data";

export const Hero = () => {
  const router = useRouter();

  return (
    <>
      {products_data.map((item, index) => {
        return (
          <Section
            key={index}
            id={item?.id + "-product-section"}
            className="products-page-product-section relative !py-28 overflow-hidden"
          >
            <Container className="relative grid grid-cols-1 gap-8 md:gap-12 xl:gap-24">
              <div
                id="details"
                className="row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 relative space-y-8 sm:space-y-16 flex flex-col justify-center z-[5]"
              >
                <div className="space-y-4 sm:space-y-8 max-w-3xl mx-auto text-center xl:text-left">
                  <Heading as="h2">{item?.title}</Heading>
                  <Typography as="default" size="MD" bold>
                    {item?.description}
                  </Typography>
                </div>
                <Button
                  size="XL"
                  variant="solid"
                  className="w-60 mx-auto xl:ml-0"
                  onClick={() => router.push(item?.slug || "")}
                >
                  Learn More
                </Button>
              </div>

              <div
                id="asset"
                className="row-start-1 row-end-2 relative h-[40vw] md:h-[40vw] lg:h-[38vw] xl:h-[33vw] 2xl:h-[450px] px-8 flex items-center justify-center"
              >
                <Image
                  width={921}
                  height={588}
                  alt="Our Platform Background"
                  src={item?.pattern_image || ""}
                  className="object-contain w-[150%] max-w-[150%] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 blur-[300px]"
                />
                <Image
                  width={1222}
                  height={1061}
                  alt="Our Platform Background"
                  src={item?.prod_image || ""}
                  className="object-contain w-[200%] max-w-[200%] z-[1]"
                />
              </div>

              {/* Overlay on smaller screen */}
              <div className="block xl:hidden absolute -left-8 right-0 -bottom-28 z-[1] h-full w-[calc(100%+7rem)] bg-gradient-to-b from-black/0 to-opaque-black" />
            </Container>
          </Section>
        );
      })}
    </>
  );
};
