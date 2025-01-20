export const buttonStylesV2 = {
  root: {
    base: "outline-none cursor-pointer relative flex items-center justify-center bg-gradient-to-b from-accent-400/50 via-accent-500/50 to-accent-600/50 border border-accent-500 rounded-full shadow-lg shadow-accent-700/50 text-white font-semibold leading-none uppercase hover:tracking-wide hover:brightness-125 transition-all ease-out duration-150",
    sizes: {
      SM: "px-5 py-2 text-sm",
      MD: "px-6 py-2 text-base",
      LG: "px-7 py-2 text-lg",
      XL: "px-8 py-2.5 text-xl",
    },
    variants: {
      solid: {
        base: "bg-accent-500",
      },
      outline: {
        base: "",
      },
    },
  },
};
