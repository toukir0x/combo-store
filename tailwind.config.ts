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
        brand: {
          orange: "#e8590c",
          "orange-hover": "#cf4b06",
          cream: "#fbf4eb",
          "cream-light": "#fcfaf7",
          dark: "#121212",
        },
      },
    },
  },
  plugins: [],
};

export default config;
