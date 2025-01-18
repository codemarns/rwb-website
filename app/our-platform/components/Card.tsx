"use client";

import Image from "next/image";
import { cn } from "@/app/lib/cn";
import { Heading } from "@/app/components/Heading";
import { Typography } from "@/app/components/Typography";
import { CommonFeatureProps } from "@/app/types/types";

type TCardProps = CommonFeatureProps & {
  className?: string;
};

export const Card: React.FC<TCardProps> = (item) => {
  return (
    <div
      className={cn(
        "relative min-h-max xs:min-h-[425px] flex flex-col items-center justify-center gap-6 sm:gap-7 lg:gap-8 p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-primary-950/50 to-primary-900/50 backdrop-blur-xl rounded-3xl border border-primary-900 shadow-[0_0_16px_0_rgba(92,96,120,0.3),_inset_0_0_16px_0_rgba(29,33,63,0.3)]",
        item.className
      )}
    >
      <Image
        priority
        width={224}
        height={224}
        alt={item?.title}
        src={item?.image || ""}
        className="object-cover absolute inset-0 w-full h-full opacity-15 mix-blend-overlay"
      />
      <Image
        priority
        width={224}
        height={224}
        alt={item?.title}
        src={item?.icon || ""}
        className="hidden xs:block relative z-[1] object-contain mx-auto"
      />
      <Image
        priority
        width={160}
        height={160}
        alt={item?.title}
        src={item?.icon || ""}
        className="block xs:hidden relative z-[1] object-contain mx-auto"
      />
      <div className="relative z-[1] space-y-2 sm:space-y-3 text-center">
        <Heading as="h6" className="text-accent-500">
          {item?.title}
        </Heading>
        <Typography as="default">{item?.description}</Typography>
      </div>
    </div>
  );
};
