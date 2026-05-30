/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#f1fbf2",
          100: "#dff5e2",
          200: "#bfecc7",
          300: "#83d996",
          400: "#43bd5f",
          500: "#169a36",
          600: "#078624",
          700: "#05691d",
          800: "#075319",
          900: "#064515"
        }
      },
      boxShadow: {
        phone: "0 28px 80px rgba(11, 51, 24, 0.22)",
        soft: "0 10px 30px rgba(16, 114, 46, 0.12)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Pretendard",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
