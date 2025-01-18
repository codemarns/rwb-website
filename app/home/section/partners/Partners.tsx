"use client";

import Image from "next/image";
import Slider from "react-slick";
import { Button } from "@/app/components/Button";
import { Section } from "@/app/components/Section";
import { Heading } from "@/app/components/Heading";
import { Container } from "@/app/components/Container";
import { Typography } from "@/app/components/Typography";
import { home_sports_data } from "@/app/data";

export const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const rtlSettings = {
    ...settings,
    rtl: true,
  };

  return (
    <Section
      id="partners-section"
      className="pt-40 md:pt-52 xl:pt-64 flex flex-col items-center justify-center gap-12 sm:gap-14 lg:gap-16 bg-white"
    >
      <Container className="space-y-12 sm:space-y-14 lg:space-y-16">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-end gap-6 sm:gap-9 lg:gap-12">
          <div className="space-y-4 sm:space-y-5 max-w-3xl text-center xl:text-left">
            <Heading as="h2" theme="light">
              Strong Partners
            </Heading>
            <Typography as="default" size="LG" theme="light">
              Our trusted collaborators drive innovation and ensure our success,
              fostering growth and excellence in every partnership.
            </Typography>
          </div>
          <Button size="XL" variant="solid" className="w-52 sm:w-60">
            See More
          </Button>
        </div>

        <div className="md:hidden relative grid grid-cols-2 sm:grid-cols-3">
          {home_sports_data.slice(0, 12).map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="h-28 w-48 p-2 flex items-center justify-center">
                <Image
                  priority
                  width={192}
                  height={112}
                  alt={item.alt}
                  src={item.image}
                  className="object-center object-contain grayscale hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className="hidden md:block slider-container relative w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)]">
        <Slider {...settings} className="relative">
          {home_sports_data.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="h-28 w-48 p-2 flex items-center justify-center">
                <Image
                  priority
                  width={192}
                  height={112}
                  alt={item.alt}
                  src={item.image}
                  className="object-center object-contain grayscale hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden md:block slider-container relative w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)]">
        <Slider {...rtlSettings} className="relative">
          {home_sports_data.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="h-28 w-48 p-2 flex items-center justify-center">
                <Image
                  priority
                  width={192}
                  height={112}
                  alt={item.alt}
                  src={item.image}
                  className="object-center object-contain grayscale hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* auto-infinite thumbnail slider for desktop */}
      <div className="hidden relative h-auto lg:h-60 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] space-y-4 overflow-hidden">
        <div className="slide-to-left absolute top-0 left-0 h-28 w-[8640px] flex items-center gap-4">
          {home_sports_data.map((item, index) => (
            <div
              key={index}
              className="h-auto w-48 flex items-center justify-center"
            >
              <Image
                priority
                width={192}
                height={112}
                alt={item.alt}
                src={item.image}
                className="object-contain grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="slide-to-left absolute top-0 left-0 h-28 w-[8640px] flex items-center gap-4">
          {home_sports_data.map((item, index) => (
            <div
              key={index}
              className="h-auto w-48 flex items-center justify-center"
            >
              <Image
                priority
                width={192}
                height={112}
                alt={item.alt}
                src={item.image}
                className="object-contain grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="slide-to-right absolute top-32 -left-[6720px] h-28 w-[8640px] hidden lg:flex items-center gap-4">
          {home_sports_data.map((item, index) => (
            <div
              key={index}
              className="h-auto w-48 flex items-center justify-center"
            >
              <Image
                priority
                width={192}
                height={112}
                alt={item.alt}
                src={item.image}
                className="object-contain grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
