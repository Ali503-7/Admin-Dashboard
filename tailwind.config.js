/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "12px"
    },
    colors: {
      c1: {
        A: "#151515",
        B: "#575757",
        C: "#A9A9A9",
        D: "#D1D1D1",
        E: "#EBEBEB",
        F: "#F5F5F5",
        H: "#F9F9F9",
        J: "#FFFFFF",
        F1: "#F1F1F1",
      },
      c2: {
        A: "#6A983C",
        B: "#46760A",
        C: "#92C064",
        D: "#C8DEB3",
        E: "#F4F8EC",
      },
      c3: {
        A: "#D0A866",
        B: "#B28A48",
        C: "#ECD2A6",
        D: "#FAEDD8",
        E: "#FFF9F0",
      },
      c4: {
        A: "#E5704B",
        B: "#C7522D",
        C: "#EB8D70",
        D: "#F7C6B7",
        E: "#FFF1ED",
      },
      c5: {
        A: "#37D0D6",
        B: "#19B2B8",
        C: "#7CD0D3",
        D: "#B9E6E8",
        E: "#ECF6F6",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      braah: ["Braah One", "sans-serif"]
    },
    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
