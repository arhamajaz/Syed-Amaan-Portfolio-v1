import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,px,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-fixed": "#ffe088",
        "on-tertiary-fixed-variant": "#27438a",
        "on-primary-fixed": "#241a00",
        "on-background": "#e5e2e1",
        "surface-container-high": "#2a2a2a",
        "inverse-primary": "#735c00",
        "outline-variant": "#4d4635",
        "on-primary": "#3c2f00",
        "on-tertiary-container": "#254188",
        "on-error": "#690005",
        "secondary-fixed": "#f7e1a6",
        "outline": "#99907c",
        "on-primary-container": "#554300",
        "inverse-on-surface": "#313030",
        "surface-container-highest": "#353534",
        "tertiary-fixed-dim": "#b4c5ff",
        "on-tertiary": "#082b72",
        "surface-tint": "#e9c349",
        "surface-bright": "#393939",
        "surface-container": "#201f1f",
        "secondary-container": "#544519",
        "tertiary-fixed": "#dbe1ff",
        "primary": "#f2ca50",
        "secondary-fixed-dim": "#dac58d",
        "on-error-container": "#ffdad6",
        "primary-container": "#d4af37",
        "on-secondary-fixed-variant": "#544519",
        "background": "#131313",
        "tertiary-container": "#97b0ff",
        "surface-dim": "#131313",
        "surface": "#131313",
        "surface-container-lowest": "#0e0e0e",
        "error": "#ffb4ab",
        "surface-variant": "#353534",
        "tertiary": "#bfcdff",
        "on-secondary-container": "#c8b37d",
        "surface-container-low": "#1c1b1b",
        "on-surface": "#e5e2e1",
        "on-secondary-fixed": "#241a00",
        "secondary": "#dac58d",
        "on-secondary": "#3c2f05",
        "primary-fixed-dim": "#e9c349",
        "error-container": "#93000a",
        "on-tertiary-fixed": "#00174b",
        "on-surface-variant": "#d0c5af",
        "inverse-surface": "#e5e2e1",
        "on-primary-fixed-variant": "#574500"
      },
      fontFamily: {
        "headline": ["Noto Serif", "serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"],
        "noto-serif": ["Noto Serif", "serif"],
        "inter": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
    },
  },
  plugins: [],
};

export default config;
