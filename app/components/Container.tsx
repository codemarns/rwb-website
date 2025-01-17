"use client";

import { cn } from "@/app/lib/cn";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      id="container"
      // p-4 sm:p-6 lg:p-8
      className={cn("w-full max-w-1376 mx-auto", className)}
    >
      {children}
    </div>
  );
};
