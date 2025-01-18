"use client";

import Link from "next/link";
import { cn } from "@/app/lib/cn";

type TypographyProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  theme?: "dark" | "light";
  size?: "XS" | "SM" | "MD" | "LG" | "XL" | "XXL";
  bold?: boolean;
  as: "default" | "link";
  slug?: string;
  onClick?: () => void;
};

const typoStyles = {
  root: {
    base: "leading-normal",
    size: {
      XXL: "xl:text-2xl text-xl",
      XL: "xl:text-xl text-lg",
      LG: "xl:text-lg text-base",
      MD: "xl:text-base text-sm",
      SM: "xl:text-sm text-xs",
      XS: "text-xs",
    },
    theme: {
      dark: "text-primary-100",
      light: "text-neutral-900",
    },
  },
};

export const Typography: React.FC<TypographyProps> = (props) => {
  const { root } = typoStyles;

  const {
    id,
    className,
    children,
    size = "MD",
    bold = false,
    theme = "dark",
    as = "default",
    slug = "",
    onClick,
  } = props;

  const baseClasses = cn(
    "TYPOGRAPHY",
    size, // use as class identifier. Check global.css
    root.base,
    // root.size[size],
    root.theme[theme],
    { ["font-semibold"]: bold },
    className
  );

  if (as === "link")
    return (
      <Link id={id} href={slug} className={baseClasses} onClick={onClick}>
        {children}
      </Link>
    );

  return (
    <p id={id} className={baseClasses}>
      {children}
    </p>
  );
};
