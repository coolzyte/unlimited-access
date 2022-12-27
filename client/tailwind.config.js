/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-base)",
          muted: "var(--color-text-muted)",
          black: "var(--color-black)",
          fill: "var(--color-fill)",
          "green-dark": "var(--color-green-dark)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--color-base)",
          fill: "var(--color-fill)",
          badge: "var(--color-badge)",
          "red-dark": "var(--color-red-dark)",
          "green-dark": "var(--color-green-dark)",
          "green-light": "var(--color-green-light)",
          "button-yellow": "var(--color-button-yellow)",
          "button-brown": "var(--color-button-brown)",
          "button-hero": "var(--color-button-hero)",
          "button-green": "var(--color-button-green)",
        },
      },
    },
  },
  plugins: [],
};
