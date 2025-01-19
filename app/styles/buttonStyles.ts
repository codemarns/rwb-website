export const buttonStyles = {
  root: {
    base: "outline-none relative flex items-center justify-center gap-2 text-white font-semibold leading-none uppercase rounded-full transition-all",
    cursors: {
      default: "cursor-pointer",
      disable: "cursor-not-allowed",
    },
    sizes: {
      SM: "px-5 py-2 text-sm", // h-9
      MD: "px-6 py-2 text-base", // h-10
      LG: "px-7 py-2 text-lg", // h-11
      XL: "px-8 py-2.5 text-xl", // h-12
    },
    variants: {
      solid: {
        base: "",
        default: "bg-accent-500 hover:bg-accent-600",
        disable: "aria-disabled:bg-accent-400",
      },
      outline: {
        base: "border-2",
        default: "border-accent-500 hover:bg-accent-500/10",
        disable: "aria-disabled:border-accent-400",
      },
    },
  },
};
