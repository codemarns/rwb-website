"use client";

import Image from "next/image";
import { Typography } from "@/app/components/Typography";
import { CommonFeatureProps } from "@/app/types/types";

export const Card: React.FC<CommonFeatureProps> = (props) => {
  return (
    <div className="py-8 xs:py-6 sm:py-8 xl:py-10 space-y-8 flex flex-col items-center justify-center border border-neutral-50">
      <div className="h-28 w-48 hidden lg:flex items-center justify-center">
        <Image
          priority
          width={192}
          height={112}
          alt={props?.title}
          src={props?.image || ""}
          className="object-center object-contain"
        />
      </div>
      <div className="!mt-0 h-[84px] w-36 flex lg:hidden items-center justify-center">
        <Image
          priority
          width={144}
          height={84}
          alt={props?.title}
          src={props?.image || ""}
          className="object-center object-contain"
        />
      </div>

      <Typography
        bold
        size="LG"
        as="default"
        theme="light"
        className="text-center leading-snug"
      >
        {props?.title}
      </Typography>
    </div>
  );
};
