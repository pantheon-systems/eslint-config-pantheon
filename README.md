Pantheon ESLint Config (`@pantheon-systems/eslint-config-pantheon`) is a linting tool for `JavaScript`.

It exports a set of ESLint rules for `Browser/React`, and a set of rules for `Node`. You can import either one (or both) based on the requirements of your project.

This plugin includes linting rules for `import`, `jest`, `jest-dom`, `jsx`, `jsx-a11y`, `react`, `react-hooks`, `testing-library`, etc.

## Prerequisites

- You need to have [eslint](https://eslint.org/) installed in your project.

  - The `eslint` version needs to be higher than `7.5.0` or `8.0.0`.

  - If your project uses `eslint` version lower than `7.5.0`, you can install Pantheon ESLint Config at version `0.2.1`.

- You need to have [prettier](https://prettier.io/) installed in your project.

## Installation

- You can install this plugin by the following command:

    ```bash
    $ yarn add @pantheon-systems/eslint-config-pantheon --dev
    ```
    Or:
    ```bash
    $ npm install @pantheon-systems/eslint-config-pantheon --save-dev
    ```


- **NOTE**: For projects using `eslint` version lower than `7.5.0`, you can install this plugin's `0.2.1` version instead:

  ```bash
  $ yarn add @pantheon-systems/eslint-config-pantheon@0.2.1 --dev
  ```
  Or:
  ```bash
  $ npm install @pantheon-systems/eslint-config-pantheon@0.2.1 --save-dev
  ```

## Configuration

1. In your project's ESLint config (e.g. `.eslintrc.js`):
    - For `Browser/React` environment, add `@pantheon-systems/eslint-config-pantheon/configurations/react` to `extends`:
    ```javascript
    module.exports = {
      extends: ['@pantheon-systems/eslint-config-pantheon/configurations/react']
    }
    ```

    - For `Node` environment, add `@pantheon-systems/eslint-config-pantheon/configurations/node`:
    ```javascript
    module.exports = {
      extends: ['@pantheon-systems/eslint-config-pantheon/configurations/node']
    }
    ```

2. In your `package.json`, you can add the following script to `scripts` if you want to lint all `jsx` files and `js` files in your `src` folder:
    ```javascript
    "scripts": {
      "eslint": "eslint src --ext .jsx --ext .js --cache"
    }
    ```

## How to Use

- Now you have `@pantheon-systems/eslint-config-pantheon` installed and configured, you can start linting by using:
  ```bash
  $ yarn eslint
  ```
  Or:
  ```bash
  $ npm run eslint
  ```

- If your eslint output has some errors, you can run the following command to fix these errors:
  ```bash
  $ yarn eslint --fix
  ```
  Or:
  ```bash
  $ npm run eslint --fix
  ```

- However, this auto-fix may not be perfect. Sometimes you may need to manually fix these errors in your code.

## Questions?

If you have any question/feedback, or need help with this plugin, please feel free to ask in `#ask-cxe` or `#frontend` channel in Pantheon Slack.

Thank you for using `@pantheon-systems/eslint-config-pantheon` and making our code prettier!
