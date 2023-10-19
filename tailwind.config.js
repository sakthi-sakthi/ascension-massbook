const tailwindcss = require("tailwindcss");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Use the 'content' property to specify content sources.
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sanss"],
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
