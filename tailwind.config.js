/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        hueRotate: "hueRotate 1s ease-in-out infinite",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          ".text-shadow-sm": {
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-md": {
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-lg": {
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
          },
        };
        addUtilities(newUtilities);
      },
    ],
  },
  plugins: [],
};
