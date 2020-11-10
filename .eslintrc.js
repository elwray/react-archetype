const path = require('path');
const baseConfig = require('./config/webpack.config');

const config = baseConfig();

module.exports = {
  parser:  '@typescript-eslint/parser',
  "extends": [
    // "typescript",
    "airbnb",
    'plugin:@typescript-eslint/recommended',
  ],
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  "plugins": [
    "flowtype",
    "async-await",
    "import",
    "react",
    "react-hooks",
    "@typescript-eslint",
  ],
  "rules": {
    "import/extensions": ["error", "ignorePackages", {
      js: "never",
      mjs: "never",
      jsx: "never",
      js: "never",
      tsx: "never",
    }],
    "object-curly-newline": "off", // TODO: to discuss
    "import/no-cycle": "off", // TODO: to discuss
    "import/named": "off", // TODO: to discuss
    "implicit-arrow-linebreak": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "react/sort-comp": "off",
    "react/no-unused-prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-one-expression-per-line": "off",
    "function-paren-newline": "off",
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    'no-restricted-syntax': 'off',
    'no-constant-condition': ['error', { checkLoops: false }], // for redux-saga while(true)
    'import/prefer-default-export': 'off',
    'no-prototype-builtins': 'off',
    "max-len": ["error", 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    "operator-linebreak": ["error", "before", { "overrides": { "=": "none" } }],
    "react/default-props-match-prop-types": 0,
    "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }],
    "react/no-unused-state": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-ts-ignore": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "jsx-a11y/no-autofocus": "warn",
    "no-eq-null": "error",
  },
};
