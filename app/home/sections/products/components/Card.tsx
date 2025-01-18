"use client";

import Image from "next/image";
import { Heading } from "@/app/components/Heading";
import { Typography } from "@/app/components/Typography";
import { KeyFeatureProps } from "@/app/types/types";
import { Button } from "@/app/components/Button";

export const Card: React.FC<KeyFeatureProps> = (item) => {
  return (
    <div
      id="product-card"
      className="group relative w-full max-w-80 bg-primary-200 rounded-xl overflow-hidden"
    >
      <div className="relative w-full pb-[133.33%]">
        <div className="absolute inset-0 h-full w-full flex items-center justify-center">
          <Image
            priority
            width={320}
            height={400}
            alt={item.title}
            src={item.image}
            className="scale-110 group-hover:scale-125 transition-all ease-out duration-500"
          />
        </div>

        <div className="absolute inset-0 flex items-end justify-center">
          <div className="relative h-28 group-hover:h-56 w-full p-4 group-hover:pb-14 bg-accent-700/30 group-hover:bg-black/30 backdrop-blur-xl rounded-b-xl space-y-2 sm:space-y-3 text-center transition-all ease-out duration-300">
            <Heading as="h6" className="text-accent-500">
              {item.title}
            </Heading>
            <Typography
              size="SM"
              as="default"
              className="line-clamp-2 group-hover:line-clamp-none transition-all"
            >
              {item.description}
            </Typography>
            <Button
              variant="solid"
              className="absolute left-0 right-0 -bottom-10 group-hover:bottom-0 w-full rounded-none"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
