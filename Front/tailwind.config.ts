import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#3F2768",
          2: "#F4F5FF",
          3: "#C5B8D3",
          4: "#948EE3",
        },
      },
      transitionProperty: {
        width: "width",
      },
      screens: {
        xs: "320px",
        sm: "375px",
      },
    },
  },
  plugins: [],
};
export default config;
