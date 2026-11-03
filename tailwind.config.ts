import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { coral: "#E49182", ink: "#111111", blush: "#F8F1EF" } } },
  plugins: []
};
export default config;
