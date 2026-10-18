import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    plugins: { react },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        document: "readonly",
        FormData: "readonly",
        IntersectionObserver: "readonly",
        navigator: "readonly",
        window: "readonly",
      },
    },
    rules: {
      "react/jsx-uses-vars": "error",
    },
  },
];
