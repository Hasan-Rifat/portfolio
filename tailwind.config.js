module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f9004d",
          secondary: "#1f1f25",
          accent: "#56565b",
          // neutral: "#191D24",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
