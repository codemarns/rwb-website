"use client";

import React from "react";
import { cn } from "@/app/lib/cn";
import { buttonStyles } from "@/app/styles/buttonStyles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
  variant?: "solid" | "outline";
  size?: "SM" | "MD" | "LG" | "XL";
}

export const Button: React.FC<ButtonProps> = (props) => {
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

  const { root } = buttonStyles;

  const baseClasses = cn(
    "BUTTON",
    root.base,
    root.sizes[size],
    root.variants[variant].base,
    disabled || loading
      ? [root.cursors.disable, root.variants[variant].disable]
      : [root.cursors.default, root.variants[variant].default],
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
