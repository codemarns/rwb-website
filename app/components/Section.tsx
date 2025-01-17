"use client";

import { cn } from "@/app/lib/cn";

export const Section = ({
  id,
  className,
  children,
  style,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <section
      id={id}
      className={cn(
        "h-auto w-full",
        "px-4 sm:px-6 lg:px-8", // x-padding
        "py-16 md:py-20 xl:py-24", // y-padding
        className
      )}
      style={style}
    >
      {children}
    </section>
  );
};
