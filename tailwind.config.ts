import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      desktop: { max: "1919px" },
      // => @media (max-width: 1919px) { ... }

      "small-desktop": { max: "1439px" },
      // => @media (max-width: 1439px) { ... }

      tablet: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      mobile: { max: "767px" },
      // => @media (max-width: 767px) { ... }
    },
  },
  plugins: [],
};
export default config;
