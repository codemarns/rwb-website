export const buttonStyles = {
  root: {
    base: "outline-none relative flex items-center justify-center gap-2 text-white font-semibold uppercase rounded-full transition-all",
    cursors: {
      default: "cursor-pointer",
      disable: "cursor-not-allowed",
    },
    sizes: {
      SM: "h-9 px-5 text-sm",
      MD: "h-10 px-6 text-base",
      LG: "h-11 px-7 text-lg",
      XL: "h-12 px-8 text-xl",
    },
    variants: {
      solid: {
        base: "",
        default: "bg-accent-500 hover:bg-accent-600",
        disable: "aria-disabled:bg-accent-400",
      },
      outline: {
        base: "border-2",
        default: "border-accent-500 hover:bg-opaque-white",
        disable: "aria-disabled:border-accent-400",
      },
    },
  },
};
