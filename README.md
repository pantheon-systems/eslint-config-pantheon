## Installation

Install ESLint and this config package (note this is not set up in NPM yet):

```bash
$ yarn add -D @pantheon/eslint-config-pantheon
```

In your project ESLint configuration, add the pantheon config to `extends`, for browser/react specific environment use the following:
`@pantheon/eslint-config-pantheon/configurations/react`

For node environment:
`@pantheon/eslint-config-pantheon/configurations/node`

And either add a babel config file or set the following in your eslint config file:
`parserOptions: {
  requireConfigFile: false,
}`
