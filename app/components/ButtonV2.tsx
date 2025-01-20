"use client";

import { cn } from "@/app/lib/cn";
import { buttonStylesV2 } from "@/app/styles/buttonStylesV2";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
  variant?: "solid" | "outline";
  size?: "SM" | "MD" | "LG" | "XL";
}

export const ButtonV2: React.FC<ButtonProps> = (props) => {
  const {
    className,
    label,
    children,
    size = "MD",
    id = "button",
    type = "button",
    variant = "solid",
    disabled = false,
    loading = false,
    ...restProps
  } = props;

  const { root } = buttonStylesV2;

  const baseClasses = cn(
    "BUTTON",
    root.base,
    root.sizes[size],
    root.variants[variant].base,
    className
  );

  return (
    <button
      {...restProps}
      id={id}
      type={type}
      className={baseClasses}
      aria-disabled={disabled || loading}
      aria-label={label}
    >
      {loading ? "Loading..." : label || children}
    </button>
  );
};
