import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

// 1) Import from `typescript-eslint`
import {
  config as tsEslintConfig,
  configs as tsEslintConfigs,
} from "typescript-eslint";

export default tsEslintConfig(
  {
    ignores: ["**/*.{js,mjs,json,css}"]
  },
  // ─────────────────────────────────────────────────────────
  // Apply the JS + React recommended configs first…
  // (So that we can build upon them for TypeScript.)
  // ─────────────────────────────────────────────────────────
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],

  // ─────────────────────────────────────────────────────────
  // Then Prettier (to turn off ESLint rules which conflict).
  // ─────────────────────────────────────────────────────────
  eslintConfigPrettier,

  // ─────────────────────────────────────────────────────────
  // Finally, apply the TypeScript “recommendedTypeChecked”
  // which extends all of TypeScript ESLint’s recommended rules
  // *plus* the type-aware ones (i.e. uses program / checker).
  // ─────────────────────────────────────────────────────────
  tsEslintConfigs.recommendedTypeChecked,

  // ─────────────────────────────────────────────────────────
  // Then override/add any custom settings.
  // ─────────────────────────────────────────────────────────
  {
    files: ["**/*.{ts,tsx}", "!**/*.spec.{ts,tsx}"],
    languageOptions: {
      // Make TypeScript type‐aware
      parserOptions: {
        // Instead of "projectService: true", explicitly specify:
        project: "./tsconfig.app.json",
        // Adjust to your TS config root
        tsconfigRootDir: import.meta.dirname,
      },
      // Optionally include the browser globals you had
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.spec.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.node.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.node,
    },
  }
);