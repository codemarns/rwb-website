"use client";

import Image from "next/image";
import { Heading } from "@/app/components/Heading";
import { Typography } from "@/app/components/Typography";
import { KeyFeatureProps } from "@/app/types/types";

export const Card: React.FC<KeyFeatureProps> = (item) => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-col gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 bg-gradient-to-tr from-primary-900/50 to-primary-800/50 backdrop-blur-2xl rounded-3xl border border-primary-900">
      <Image
        priority
        alt={item.title}
        src={item.image}
        width={140}
        height={140}
      />
      <div className="space-y-2 sm:space-y-3">
        <Heading as="h6" className="text-accent-500">
          {item.title}
        </Heading>
        <Typography as="default">{item.description}</Typography>
      </div>
    </div>
  );
};
