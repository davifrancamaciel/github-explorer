{
  "env": {
      "es6": true
  },
  "extends": [
      "plugin:react/recommended",
      "airbnb",
      "plugin:@typescript-eslint/recommended"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly",
      "__DEV__": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "react-hooks",
      "@typescript-eslint"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpresions": true
      }
    ],
    "no-unused-expressions": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
