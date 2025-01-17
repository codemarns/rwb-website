"use client";

import { cn } from "@/app/lib/cn";

type HeadingProps = {
  className?: string;
  children: React.ReactNode;
  theme?: "dark" | "light";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const headingStyles = {
  root: {
    base: "font-manrope font-bold leading-snug",
    theme: {
      dark: "text-white",
      light: "text-primary-900",
    },
  },
};

export const Heading: React.FC<HeadingProps> = (props) => {
  const { root } = headingStyles;

  const { className, children, as = "h1", theme = "dark" } = props;

  const baseCls = cn(root.base, root.theme[theme], className);

  if (as === "h1") return <h1 className={baseCls}>{children}</h1>;
  if (as === "h2") return <h2 className={baseCls}>{children}</h2>;
  if (as === "h3") return <h3 className={baseCls}>{children}</h3>;
  if (as === "h4") return <h4 className={baseCls}>{children}</h4>;
  if (as === "h5") return <h5 className={baseCls}>{children}</h5>;
  if (as === "h6") return <h6 className={baseCls}>{children}</h6>;

  return <h1 className={baseCls}>{children}</h1>;
};
