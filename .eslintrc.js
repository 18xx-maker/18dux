module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "plugin:jest/recommended",
    "eslint:recommended",
    "standard",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "jest"
  ],
  "rules": {
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2, { "FunctionDeclaration": { "parameters": "first" },
                                                "CallExpression": { "arguments": "first" },
                                                "ArrayExpression": "first",
                                                "ObjectExpression": "first" }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "after-used" }]
  }
};
