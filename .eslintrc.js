module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: ["./tsconfig.json", "./tsconfig-build.json"],
  },
  plugins: [
    "prettier", // added so we can access the rule to turn on warnings.
  ],
  extends: [
    "airbnb", // https://github.com/airbnb/javascript
    "airbnb/hooks", // https://github.com/airbnb/javascript
    "airbnb-typescript", // https://github.com/iamturns/eslint-config-airbnb-typescript
    "plugin:react-native/all", // https://github.com/intellicode/eslint-plugin-react-native
    "prettier",
  ],
  rules: {
    "prettier/prettier": "warn", // show what's going to be fixed with prettier.
    "import/prefer-default-export": "off",
    "import/extensions": "off", // https://stackoverflow.com/a/59268871
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*test.*"] },
    ], // allow devDependency imports in test files. https://stackoverflow.com/a/55863857/25197

    // ::: TypeScript
    "@typescript-eslint/no-unused-vars": ["off", { ignoreRestSiblings: true }], // allow unused variables when using a rest property. https://stackoverflow.com/q/56151661/25197

    // ::: ESlint
    //   'arrow-body-style': 'off', // Allow commented out console logs in arrow bodies.
    //   camelcase: 'off', // We're forced to use snake_case for graphql and Auth0 response.
    //   'global-require': 'off', // Allow inline requires() for Expo asset imports.
    //   'no-param-reassign': ['error', { props: false }], // Allow param reassignment because we use it for easy-peasy state. https://stackoverflow.com/a/42399879
    //   'no-unreachable': 'warn', // turned off in tsconfig.json and added here so code doesn't get deleted by --autofix command.
    //   'consistent-return': 'off', // we allow multiple returns via "guard statements". https://stackoverflow.com/q/36707/25197
    //   'no-underscore-dangle': ['error', { allow: ['_forTesting'] }], // allow for exporting to unit tests. https://stackoverflow.com/a/65422568/25197
    //   'no-restricted-exports': 'off', // TODO: turn this back on and refactor default exports.

    //   // ::: React
    //   'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }], // use named arrow functions for components. https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    //   'react/require-default-props': 'off', // Waiting on setting once this is settled. https://github.com/reactjs/rfcs/pull/107
    //   'react/prop-types': 'off', // Let Typescript handle all type issues.
    //   'react/jsx-props-no-spreading': 'off', // Meant to protect against unwanted/unintended props are being passed to the component but we do it all the time.

    //   // ::: React Native
    //   'react-native/no-raw-text': 'off', // NativeBase has components that accept raw text.
    //   'react-native/no-inline-styles': 'off', // NativeBase is only inline styling.
  },
};
