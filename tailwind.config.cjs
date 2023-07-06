/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const base = require("./packages/branding/tailwind.config.cjs");
module.exports = {
  mode: "jit",
  content: ["./packages/**/src/**/*.tsx"],
  ...base,
};
