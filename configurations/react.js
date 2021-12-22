module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
  ],
  plugins: ['jest', 'jsx', 'react-hooks', 'testing-library', 'import'],
  env: {
    browser: true,
    'jest/globals': true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          ['sibling', 'index'],
        ],
      },
    ],
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest/expect-expect': 'error',
    'jest/lowercase-name': [
      'error',
      {
        ignore: ['describe'],
      },
    ],
    'jest/no-commented-out-tests': 'error',
    'jest/no-mocks-import': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/no-truthy-falsy': 'error',
    'jest/no-try-expect': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/require-to-throw-message': 'error',
    'jest/valid-title': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        reservedFirst: false,
      },
    ], // Checks components' props/attributes order
    'react/sort-prop-types': [
      'error',
      {
        sortShapeProp: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'testing-library/consistent-data-testid': [
      'warn',
      {
        testIdPattern: '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', // kebab-case
      },
    ],
    'testing-library/no-await-sync-events': 'error',
    'testing-library/no-manual-cleanup': 'error',
    'testing-library/no-wait-for-snapshot': 'error',
    'testing-library/prefer-explicit-assert': 'warn',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-wait-for': 'error',
  },
};
