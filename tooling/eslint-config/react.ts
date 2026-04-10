import type { Linter } from "eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import a11y from "eslint-plugin-jsx-a11y";
import base from "./base";

const config: Linter.FlatConfig[] = [
  ...base,
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": a11y,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/display-name": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: { version: "detect" },
    },
  },
];

export default config;