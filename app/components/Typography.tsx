"use client";

import Link from "next/link";
import { cn } from "@/app/lib/cn";

type TitleProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  theme?: "dark" | "light";
  size?: "XS" | "SM" | "MD" | "LG" | "XL" | "XXL";
  bold?: boolean;
  as: "default" | "link";
  slug?: string;
};

const titleStyles = {
  root: {
    base: "",
    size: {
      XXL: "text-2xl leading-9",
      XL: "text-xl leading-8",
      LG: "text-lg leading-7",
      MD: "text-base leading-6",
      SM: "text-sm leading-5",
      XS: "text-xs leading-4",
    },
    theme: {
      dark: "text-primary-100",
      light: "text-neutral-900",
    },
  },
};

export const Typography: React.FC<TitleProps> = (props) => {
  const {
    id,
    className,
    children,
    size = "MD",
    bold = false,
    theme = "dark",
    as = "default",
    slug = "",
  } = props;

  const { root } = titleStyles;

  const baseClasses = cn(
    "TYPOGRAPHY",
    root.base,
    root.size[size],
    root.theme[theme],
    { ["font-semibold"]: bold },
    className
  );

  if (as === "link")
    return (
      <Link id={id} href={slug} className={baseClasses}>
        {children}
      </Link>
    );

  return (
    <p id={id} className={baseClasses}>
      {children}
    </p>
  );
};
