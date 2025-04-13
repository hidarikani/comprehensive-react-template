import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

import {
  config as tsEslintConfig,
  configs as tsEslintConfigs,
} from "typescript-eslint";

export default tsEslintConfig(
  {
    ignores: ["**/*.{js,mjs,json,css,svg}"],
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  tsEslintConfigs.recommendedTypeChecked,
  // Disable rules related to code style
  // Must be last because it disables some JSX and TypeScript rules
  eslintConfigPrettier,
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
  },
);
