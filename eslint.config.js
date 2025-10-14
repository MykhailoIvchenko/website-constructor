import eslintJs from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import eslintTs from "typescript-eslint";


/** @type {import('eslint').Linter.Config } */
export default eslintTs.config(eslintJs.configs.recommended, ...eslintTs.configs.recommended, {
    "plugins": {
        "react": eslintPluginReact,
        "react-hooks": eslintPluginReactHooks,
        "react-refresh": eslintPluginReactRefresh,
        "globals": globals,
        "@stylistic/js": stylisticJs
    }
}, {
    "ignores": ["node_modules", "dist"]
}, {
    "languageOptions": {
        "globals": {
            ...globals.node,
            ...globals.browser,
            ...globals.es5
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parserOptions": {
            "project": ["tsconfig.json", "tsconfig.node.json"],
            "sourceType": "module",
            "ecmaVersion": 2020
        }
    }
}, {
    "files": ["src/**/*.{ts,tsx}"]
}, {
    "rules": {
        ...eslintPluginReact.configs.recommended.rules,
        ...eslintPluginReactHooks.configs.recommended.rules,
        ...stylisticJs.configs["all-flat"].rules,
        "@typescript-eslint/no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
        "@stylistic/js/indent": ["warn", 4],
        "@stylistic/js/array-bracket-newline": ["error", "never"],
        "@stylistic/js/function-call-argument-newline": ["error", "never"],
        "@stylistic/js/array-element-newline": ["error", { "minItems": 5 }],
        "@stylistic/js/brace-style": ["error", "1tbs", { "allowSingleLine": true }]

    }
});
