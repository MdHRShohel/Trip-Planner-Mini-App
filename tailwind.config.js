/** @type {import('tailwindcss').Config} */
import { platformSelect } from "nativewind/theme";
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}",],
  presets: [require("nativewind/preset")],
   theme: {
    extend: {
      fontFamily: {
        inter: ["Inter-Regular"],
        system: platformSelect({
          ios: "Georgia",
          android: "sans-serif",
          default: "ui-sans-serif",
        }),
      },
    },
  },
  plugins: [],
}