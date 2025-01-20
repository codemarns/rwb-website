"use client";

import Image from "next/image";
import { Heading } from "@/app/components/Heading";
import { Typography } from "@/app/components/Typography";

export const MissionVision = ({
  id,
  icon,
  title,
  description,
}: {
  id: string;
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="space-y-5">
      <div className="h-24 w-h-24 flex items-center justify-center xl:justify-start">
        <Image
          width={96}
          height={96}
          alt={id}
          src={icon}
          className="object-contain"
        />
      </div>
      {/* <div className="h-12 w-12 block md:hidden">
        <Image
          width={48}
          height={48}
          alt={id}
          src={icon}
          className="object-contain"
        />
      </div> */}
      <div className="space-y-1">
        <Heading as="h5" theme="light" className="text-accent-500">
          {title}
        </Heading>
        <Typography bold as="default" theme="light">
          {description}
        </Typography>
      </div>
    </div>
  );
};
