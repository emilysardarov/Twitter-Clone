import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "reg": ["chirp", ...defaultTheme.fontFamily.sans],
        "bold": ["chirp-bold"],
        "heavy": ["chirp-heavy"],
      },
    }
  },
  plugins: [],
} satisfies Config;
