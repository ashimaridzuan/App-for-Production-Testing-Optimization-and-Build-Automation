import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
]);


//Add ESLint Rules//
// rules: {
 // "no-var": "error", // Disallow var declarations
 // "no-unused-vars": "error",// Disallow unused variables
 // "semi": ["error", "always"], // Enforce semicolons at the end of statements
 // "no-console": "warn", // Warn when console statements are used
//}