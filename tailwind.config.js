import plugin from "tailwindcss/plugin";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      backgroundImage: {
        "header-image": "url('/public/images/header.svg')",
        "completed-image": "url('/public/images/completed.svg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.4xl") },
        h2: { fontSize: theme("fontSize.3xl") },
        h3: { fontSize: theme("fontSize.2xl") },
        h4: { fontSize: theme("fontSize.xl") },
        h5: { fontSize: theme("fontSize.lg") },
        h6: { fontSize: theme("fontSize.base") },
      });
    }),
  ],
};

export default config;
